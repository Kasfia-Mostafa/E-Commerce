import express from 'express';
import { ordersControllers } from './orders.controllers';

const router = express.Router();

router.post('/', ordersControllers.createOrders);
router.get('/', ordersControllers.getAllOrSearchOrders);


export const OrdersRoutes = router;