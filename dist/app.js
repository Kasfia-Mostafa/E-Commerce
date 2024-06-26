"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const phones_route_1 = require("./Products/modules/phones/phones.route");
const orders_route_1 = require("./Orders/modules/orders/orders.route");
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the E-Commerce');
});
// Application routes
app.use('/api/products', phones_route_1.PhonesRoutes);
app.use('/api/orders', orders_route_1.OrdersRoutes);
// 404 handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});
exports.default = app;
