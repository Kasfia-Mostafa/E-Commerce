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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesControllers = void 0;
const phones_service_1 = require("./phones.service");
const phones_zod_validation_1 = __importDefault(require("./phones.zod.validation"));
// Adding phones to the site
const createPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const zodParseData = phones_zod_validation_1.default.parse(req.body);
        // Create phones in the database
        const result = yield phones_service_1.PhonesServices.createPhonesInDB(zodParseData);
        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
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
// Get all phones data
const getAllOrSearchPhones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const products = yield phones_service_1.PhonesServices.getAllOrSearchPhonesFromDB(searchTerm);
        const message = searchTerm
            ? `Products matching search term '${searchTerm}' fetched successfully!`
            : 'All phones fetched successfully!';
        res.status(200).json({
            success: true,
            message,
            data: products,
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});
const getSinglePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield phones_service_1.PhonesServices.getSingleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
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
//  Update product info
const updatePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateDataProduct = req.body;
        const updatedPhone = yield phones_service_1.PhonesServices.updateProductByIdInDB(productId, updateDataProduct);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully!',
            data: updatedPhone,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});
// delete product
const deletePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const deletedPhone = yield phones_service_1.PhonesServices.deleteProductFromDB(productId);
        if (!deletedPhone) {
            return res.status(404).json({
                success: false,
                message: 'Product not found!',
            });
        }
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
            data: null,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});
exports.PhonesControllers = {
    createPhones,
    getAllOrSearchPhones,
    getSinglePhone,
    updatePhone,
    deletePhone,
};
