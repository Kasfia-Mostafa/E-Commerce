import express from 'express';
import { PhonesControllers } from './phones.controller';

const router = express.Router();

router.post('/', PhonesControllers.createPhones);
router.get('/',PhonesControllers.getAllOrSearchPhones)
router.get('/:productId',PhonesControllers.getSinglePhone)
router.put('/:productId',PhonesControllers.updatePhone)
router.delete('/:productId',PhonesControllers.deletePhone)

export const PhonesRoutes = router;
