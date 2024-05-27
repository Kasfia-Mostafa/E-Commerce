"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Define the Zod schema for the Variant
const variantSchema = zod_1.z.object({
    type: zod_1.z.string().nonempty({ message: "Type is required" }),
    value: zod_1.z.string().nonempty({ message: "Value is required" }),
});
// Define the Zod schema for the Inventory
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().min(0, { message: "Quantity must be at least 0" }),
    inStock: zod_1.z.boolean({ required_error: "InStock is required" }),
});
// Define the Zod schema for the Phones
const phoneSchema = zod_1.z.object({
    name: zod_1.z.string().nonempty({ message: "Name is required" }),
    description: zod_1.z.string().nonempty({ message: "Description is required" }),
    price: zod_1.z.number().min(0, { message: "Price must be at least 0" }),
    category: zod_1.z.string().nonempty({ message: "Category is required" }),
    tags: zod_1.z.array(zod_1.z.string()).nonempty({ message: "Tags are required" }),
    variants: zod_1.z.array(variantSchema).nonempty({ message: "Variants are required" }),
    inventory: inventorySchema,
});
// Create a schema for an array of phones
const phonesArrayValidationSchema = zod_1.z.array(phoneSchema);
exports.default = phonesArrayValidationSchema;
