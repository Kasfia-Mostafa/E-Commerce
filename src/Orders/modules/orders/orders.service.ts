import { TOrder } from './orders.interface';
import { OrderModel } from './orders.model'; 

// Order product
const createOrdersInDB = async (payload: TOrder) => {
  const result = await OrderModel.create(payload); 
  return result;
};

// Get all orders or search by email
const getAllOrSearchOrdersFromDB = async (email: string) => {
  if (!email) {
    throw new Error('Email parameter is required');
  }
  const regexPattern = new RegExp(email, 'i');
  return OrderModel.find({ email: { $regex: regexPattern } }); 
};

export const OrdersService = {
  createOrdersInDB,
  getAllOrSearchOrdersFromDB,
};
