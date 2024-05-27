"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const phones_controller_1 = require("./phones.controller");
const router = express_1.default.Router();
router.post('/', phones_controller_1.PhonesControllers.createPhones);
router.get('/', phones_controller_1.PhonesControllers.getAllOrSearchPhones);
router.get('/:productId', phones_controller_1.PhonesControllers.getSinglePhone);
router.put('/:productId', phones_controller_1.PhonesControllers.updatePhone);
router.delete('/:productId', phones_controller_1.PhonesControllers.deletePhone);
exports.PhonesRoutes = router;
