import { Request, Response } from 'express';
import { OrdersService } from './orders.service';

// Ordering phones
const createOrders = async (req: Request, res: Response) => {
  try {
    const ordersData = req.body;
    const result = await OrdersService.createOrdersInDB(ordersData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// Get order all and by email
const getAllOrSearchOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (typeof email !== 'string') {
      return res
        .status(400)
        .json({ success: false, message: 'Email is required' });
    }
    const result = await OrdersService.getAllOrSearchOrdersFromDB(email);
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
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'Internal Server Error' });
  }
};

export const ordersControllers = {
  createOrders,
  getAllOrSearchOrders,
};
