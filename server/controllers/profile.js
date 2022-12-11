import mongoose from "mongoose";
import Profile from "../models/profile.js";

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();

    res.status(200).json(profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProfilesBySearch = async (req, res) => {
  const { searchQuery } = req.query;

  try {
    const profiles = await Profile.find({
      $or: [
        { firstName: { $regex: searchQuery, $options: "i" } },
        { lastName: { $regex: searchQuery, $options: "i" } },
        { role: { $regex: searchQuery, $options: "i" } },
        { introduction: { $regex: searchQuery, $options: "i" } },
      ],
    });

    res.status(200).json(profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProfile = async (req, res) => {
  const profile = req.body;
  const newProfile = new Profile({ ...profile, userID: req.userId });

  try {
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const { id: _id } = req.params;
  const profile = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("This profile does not exist");

  const updatedProfile = await Profile.findByIdAndUpdate(
    _id,
    { ...profile, _id },
    { new: true }
  );

  res.json(updatedProfile);
};

export const deleteProfile = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("This profile does not exist");

  await Profile.findByIdAndRemove(_id);

  res.json({ message: "Profile deleted successfully" });
};

export const updateRecommendations = async (req, res) => {
  const { id: _id } = req.params;

  if (!req.userId) {
    return res.json({ message: "User not authorized" });
  }

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("This profile does not exist");

  const profile = await Profile.findById(_id);

  const idx = profile.recommendations.findIndex(
    (_id) => _id === String(req.userId)
  );
  if (idx === -1) {
    profile.recommendations.push(req.userId);
  } else {
    profile.recommendations = profile.recommendations.filter(
      (_id) => _id !== String(req.userId)
    );
  }
  const updatedProfile = await Profile.findByIdAndUpdate(_id, profile, {
    new: true,
  });

  res.json(updatedProfile);
};
