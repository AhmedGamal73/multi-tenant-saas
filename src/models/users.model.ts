import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  age: number;
  username: string;
  country: string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  username: { type: String, required: true },
  country: { type: String, required: true },
});

export const User = mongoose.model("User", userSchema);
