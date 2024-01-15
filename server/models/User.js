import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "username is required."],
    },
    email: {
      type: String,
      required: [true, "email is required."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required."],
      minLength: 5,
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
