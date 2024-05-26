import { Schema, model } from 'mongoose';
import { TInventory, TPhones, TVariant } from './phones.interface';

// Define the Variant schema
const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Define the Inventory schema
const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true },
});

// Define the Phones schema
const phonesSchema = new Schema<TPhones>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

export const  Phones = model<TPhones>('Phones', phonesSchema)