import { z } from 'zod';

// Define the Zod schema for the Variant
const variantSchema = z.object({
  type: z.string().nonempty({ message: "Type is required" }),
  value: z.string().nonempty({ message: "Value is required" }),
});

// Define the Zod schema for the Inventory
const inventorySchema = z.object({
  quantity: z.number().min(0, { message: "Quantity must be at least 0" }),
  inStock: z.boolean({ required_error: "InStock is required" }),
});

// Define the Zod schema for the Phones
const phoneSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  price: z.number().min(0, { message: "Price must be at least 0" }),
  category: z.string().nonempty({ message: "Category is required" }),
  tags: z.array(z.string()).nonempty({ message: "Tags are required" }),
  variants: z.array(variantSchema).nonempty({ message: "Variants are required" }),
  inventory: inventorySchema,
});

export default phoneSchema;
