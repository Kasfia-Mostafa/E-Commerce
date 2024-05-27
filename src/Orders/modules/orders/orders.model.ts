import mongoose, { model } from "mongoose";
import { TOrder } from "./orders.interface";
const { Schema } = mongoose;

// Define the schema for an order
const orderSchema = new Schema({
  email: {
    type: String,
    required: true,
    // match: /.+\@.+\..+/ 
  },
  productId: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

export const Orders = model<TOrder>('Orders', orderSchema);