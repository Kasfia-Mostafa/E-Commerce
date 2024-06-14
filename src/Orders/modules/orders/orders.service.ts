import { TOrder } from './orders.interface';
import { OrderModel } from './orders.model';

// Order product
const createOrdersInDB = async (payload: TOrder) => {
  const result = await OrderModel.create(payload);
  return result;
};

// Get all orders or search by email
const getAllSearchedOrdersFromDB = async (email: string) => {
  if (email) {
    const regexPattern = new RegExp(email, 'i');
    return OrderModel.find({ email: { $regex: regexPattern } });
  } else {
    return OrderModel.find();
  }
};

export const OrdersService = {
  createOrdersInDB,
  getAllSearchedOrdersFromDB,
};
