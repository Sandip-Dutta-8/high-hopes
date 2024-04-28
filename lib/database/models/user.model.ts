import mongoose, { Schema } from "mongoose";
import { model } from "mongoose";
import { models } from "mongoose";
import { Types } from "mongoose";
import { Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
  events: Types.ObjectId[]; // Array of ObjectId references to events
  orders: Types.ObjectId[]; // Array of ObjectId references to orders
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: {type: String, required: true },
  photo: { type: String, required: true },
})

const User = models.User || model<IUser>('User', UserSchema);

export default User;