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
exports.PhonesServices = void 0;
const phones_model_1 = require("./phones.model");
// Add phone
const createPhonesInDB = (phonesData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield phones_model_1.Phones.insertMany(phonesData);
});
// Get all phones
const getAllOrSearchPhonesFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const regexPattern = new RegExp(searchTerm, 'i');
        return phones_model_1.Phones.find({
            $or: [
                { name: { $regex: regexPattern } },
                { description: { $regex: regexPattern } },
                { tags: { $regex: regexPattern } },
            ],
        });
    }
    return phones_model_1.Phones.find();
});
// Get all phone by id
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield phones_model_1.Phones.findById(id);
    return result;
});
//  Update product info
const updateProductByIDInDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPhone = yield phones_model_1.Phones.updateOne({
        _id: id,
        $set: updateData,
    });
    return updatedPhone;
});
// Delete product
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield phones_model_1.Phones.deleteOne({ _id: id });
    return result;
});
exports.PhonesServices = {
    createPhonesInDB,
    getAllOrSearchPhonesFromDB,
    getSingleProductFromDB,
    updateProductByIDInDB,
    deleteProductFromDB,
};
