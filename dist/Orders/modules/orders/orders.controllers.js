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
// Ordering phones
const createOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParsedData = orders_zod_validation_1.OrderValidation.parse(req.body);
        const result = yield orders_service_1.OrdersService.createOrdersInDB(zodParsedData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});
// Get order all and by email
const getAllOrSearchOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        if (typeof email !== 'string') {
            return res
                .status(400)
                .json({ success: false, message: 'Email is required' });
        }
        const result = yield orders_service_1.OrdersService.getAllOrSearchOrdersFromDB(email);
        if (!result) {
            return res
                .status(404)
                .json({ success: false, message: 'Order not found' });
        }
        return res.status(200).json({
            success: true,
            message: `Orders fetched successfully for user email`,
            data: result,
        });
    }
    catch (error) {
        return res
            .status(500)
            .json({ success: false, message: 'Internal Server Error' });
    }
});
exports.ordersControllers = {
    createOrders,
    getAllOrSearchOrders,
};
