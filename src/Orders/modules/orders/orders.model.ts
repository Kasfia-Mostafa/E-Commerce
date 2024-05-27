import mongoose, { Schema } from "mongoose";
import { TOrder, TUser } from "./orders.interface";

// Define the schema for the Order collection
const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

// Define the schema for the User collection
const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true }
});

// Define and export the Order model
export const OrderModel = mongoose.model<TOrder>("Order", orderSchema);

// Define and export the User model
export const UserModel = mongoose.model<TUser>("User", userSchema);
