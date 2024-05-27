import { z } from "zod";
import  {  Document } from "mongoose";

// Define the TOrder interface
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

// Create Zod schema for TOrder
export const TOrderSchema = z.object({
  email: z.string(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number()
});

// Create Zod schema for TUser
export const TUserSchema = z.object({
  name: z.string(),
  address: z.string(),
  number: z.string(),
  email: z.string()
});

export const OrderValidation = z.object({
    email: z.string().email(),
    productId: z.string(),
    price: z.number().positive(),
    quantity: z.number().positive().int(),
  });

