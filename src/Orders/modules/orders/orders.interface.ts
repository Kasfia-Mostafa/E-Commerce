import { Document } from "mongoose";

export interface TOrder extends Document {
  email: string;
  productId: string;
  price: number;
  quantity: number;
}

// Define the TUser interface
export interface TUser extends Document {
  name: string;
  address: string;
  number: string;
  email: string;
}
