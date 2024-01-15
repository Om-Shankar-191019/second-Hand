import { User } from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password, image } = req.body;
  if (!username || !email || !password) {
    throw new Error(`All fields are required.`);
  }
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    throw new Error("User already exist.");
  }
  const hashPassword = bcryptjs.hashSync(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashPassword,
    image,
  });

  res.status(200).json("User created successfully.");
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error(`All fields are required.`);
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found.");
  }
  const isPasswordCorrect = bcryptjs.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error("Invalid Credentials.");
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.cookie("access_token", token).status(200).json({ user });
};
