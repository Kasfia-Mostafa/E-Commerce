import express from 'express';
import { PhonesControllers } from './phones.controller';

const router = express.Router();

router.post('/', PhonesControllers.createPhones);
router.get('/',PhonesControllers.getAllPhones)

export const PhonesRoutes = router;
