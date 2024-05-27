"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phones = void 0;
const mongoose_1 = require("mongoose");
// Define the Variant schema without _id
const variantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
}, { _id: false });
// Define the Inventory schema without _id
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
}, { _id: false });
// Define the Phones schema
const phonesSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema], required: true },
    inventory: { type: inventorySchema, required: true },
});
// Create the Phones model
exports.Phones = (0, mongoose_1.model)('Phones', phonesSchema);
