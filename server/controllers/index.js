import mongoose from "mongoose";
import Profile from "../models/index.js";

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProfile = async (req, res) => {
  const profile = req.body;
  const newProfile = new Profile(profile);

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
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("This profile does not exist");

  await Profile.findByIdAndRemove(id);

  res.json({ message: "Profile deleted successfully" });
};

export const updateRecommendations = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("This profile does not exist");

  const profile = await Profile.findById(id);
  const updatedProfile = await Profile.findByIdAndUpdate(
    id,
    { recommendations: profile.recommendations + 1 },
    { new: true }
  );

  res.json(updatedProfile);
};
