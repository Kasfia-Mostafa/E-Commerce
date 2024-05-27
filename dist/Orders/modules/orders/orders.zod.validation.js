"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = exports.TUserSchema = exports.TOrderSchema = void 0;
const zod_1 = require("zod");
// Create Zod schema for TOrder
exports.TOrderSchema = zod_1.z.object({
    email: zod_1.z.string(),
    productId: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number()
});
// Create Zod schema for TUser
exports.TUserSchema = zod_1.z.object({
    name: zod_1.z.string(),
    address: zod_1.z.string(),
    number: zod_1.z.string(),
    email: zod_1.z.string()
});
exports.OrderValidation = zod_1.z.object({
    email: zod_1.z.string().email(),
    productId: zod_1.z.string(),
    price: zod_1.z.number().positive(),
    quantity: zod_1.z.number().positive().int(),
});
