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
exports.OrdersService = void 0;
const orders_model_1 = require("./orders.model");
// Order product
const createOrdersInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield orders_model_1.OrderModel.create(payload);
    return result;
});
// Get all orders or search by email
const getAllSearchedOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const regexPattern = new RegExp(email, 'i');
        return orders_model_1.OrderModel.find({ email: { $regex: regexPattern } });
    }
    else {
        return orders_model_1.OrderModel.find();
    }
});
exports.OrdersService = {
    createOrdersInDB,
    getAllSearchedOrdersFromDB,
};
