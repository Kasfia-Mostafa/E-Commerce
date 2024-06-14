import { Types } from "mongoose";

// Define the TOrder interface
export interface TOrder {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
}

// Define the TUser interface
export interface TUser {
  name: string;
  address: string;
  number: string;
  email: string;
}
