import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUserResult = await User.findOne({ email });

    if (!findUserResult)
      return res.status(404).json({ message: "Sorry, user doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      findUserResult.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({
        message:
          "Sorry, your email and password don't match. Please try again.",
      });

    const token = jwt.sign(
      { email: findUserResult.email, id: findUserResult._id },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result: findUserResult, token });
  } catch (error) {
    res.status(500).json({ message: "There was something wrong." });
  }
};

export const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const findUserResult = await UserModal.findOne({ email });

    if (findUserResult)
      return res
        .status(400)
        .json({ message: "User already exists, please sign in." });

    const hashedPassword = bcrypt.hash(password, process.env.SALT);

    const result = await User.create({
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "There was something wrong." });
  }
};
