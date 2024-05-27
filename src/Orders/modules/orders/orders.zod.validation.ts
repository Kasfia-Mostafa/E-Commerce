import { z } from "zod";

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

