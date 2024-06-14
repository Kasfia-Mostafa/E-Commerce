import { Request, Response } from 'express';
import { OrdersService } from './orders.service';
import { OrderValidation } from './orders.zod.validation';
import { OrderModel } from './orders.model';
import { Phones } from '../../../Products/modules/phones/phones.model';

// Ordering phones
const createOrders = async (req: Request, res: Response) => {
  try {
    const zodParsedData = OrderValidation.parse(req.body);
    const { email, productId, quantity } = zodParsedData;

    // Find the product in the inventory
    const availablePhones = await Phones.findById(productId);
    if (!availablePhones) {
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' });
    }

    // Check if sufficient quantity is available
    if (availablePhones.inventory.quantity < quantity) {
      return res
        .status(400)
        .json({ success: false, message: 'Insufficient quantity available in inventory' });
    }

    // Update inventory quantity and inStock status
    availablePhones.inventory.quantity -= quantity;
    availablePhones.inventory.inStock = availablePhones.inventory.quantity > 0;
    await availablePhones.save();

    // Create the order
    const price = availablePhones.price;
    const newOrder = new OrderModel({
      email,
      productId: availablePhones._id,
      quantity,
      price,
    });
    const result = await newOrder.save();
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    if (
      err instanceof Error &&
      (err.message === 'Product not found' ||
        err.message === 'Insufficient quantity available in inventory')
    ) {
      return res.status(400).json({ success: false, message: err.message });
    }
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const getAllOrSearchOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    let result;
    if (email) {
      if (typeof email !== 'string') {
        return res.status(400).json({
          success: false,
          message: 'Email must be a string',
        });
      }
      result = await OrdersService.getAllSearchedOrdersFromDB(email as string); 
    } else {
      result = await OrdersService.getAllSearchedOrdersFromDB();
    }

    if (!result || result.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      });
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('Error retrieving orders:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};


export const ordersControllers = {
  createOrders,
  getAllOrSearchOrders,
};
