import { Schema, model, Document } from 'mongoose';
import { TInventory, TPhones, TVariant } from './phones.interface';

// Mongoose document interfaces
interface IVariant extends TVariant, Document {}
interface IInventory extends TInventory, Document {}
interface IPhones extends TPhones, Document {}

// Define the Variant schema without _id
const variantSchema = new Schema<IVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
}, { _id: false });

// Define the Inventory schema without _id
const inventorySchema = new Schema<IInventory>({
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true },
}, { _id: false });

// Define the Phones schema
const phonesSchema = new Schema<IPhones>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});

// Create the Phones model
export const Phones = model<IPhones>('Phones', phonesSchema);
