"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ordersControllers = void 0;
const orders_service_1 = require("./orders.service");
const orders_zod_validation_1 = require("./orders.zod.validation");
const orders_model_1 = require("./orders.model");
const phones_model_1 = require("../../../Products/modules/phones/phones.model");
// Ordering phones
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParsedData = orders_zod_validation_1.OrderValidation.parse(req.body);
        const { email, productId, quantity } = zodParsedData;
        // Find the product in the inventory
        const availablePhones = yield phones_model_1.Phones.findById(productId);
        if (!availablePhones) {
            return res
                .status(404)
                .json({ success: false, message: 'Product not found' });
        }
        // Check if sufficient quantity is available
        if (availablePhones.inventory.quantity < quantity) {
            return res
                .status(400)
                .json({ success: false, message: 'Insufficient quantity available in inventory' });
        }
        // Update inventory quantity and inStock status
        availablePhones.inventory.quantity -= quantity;
        availablePhones.inventory.inStock = availablePhones.inventory.quantity > 0;
        yield availablePhones.save();
        // Create the order
        const price = availablePhones.price;
        const newOrder = new orders_model_1.OrderModel({
            email,
            productId: availablePhones._id,
            quantity,
            price,
        });
        const result = yield newOrder.save();
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (err) {
        if (err instanceof Error &&
            (err.message === 'Product not found' ||
                err.message === 'Insufficient quantity available in inventory')) {
            return res.status(400).json({ success: false, message: err.message });
        }
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});
const getAllOrSearchOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        let result;
        if (email) {
            if (typeof email !== 'string') {
                return res.status(400).json({
                    success: false,
                    message: 'Email must be a string',
                });
            }
            result = yield orders_service_1.OrdersService.getAllSearchedOrdersFromDB(email);
        }
        else {
            result = yield orders_service_1.OrdersService.getAllSearchedOrdersFromDB();
        }
        if (!result || result.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Order not found',
            });
        }
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (error) {
        console.error('Error retrieving orders:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
});
exports.ordersControllers = {
    createOrders,
    getAllOrSearchOrders,
};
