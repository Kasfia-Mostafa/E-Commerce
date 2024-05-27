import { TOrder } from './orders.interface';
import { Orders } from './orders.model';

// Order product
const createOrdersInDB = async (payload: TOrder) => {
  const result = await Orders.create(payload);
  return result;
};

const getAllOrSearchOrdersFromDB = async (email:string) => {
    if (!email) {
      throw new Error('Email parameter is required');
    }
    const regexPattern = new RegExp(email, 'i');
    return Orders.findOne({ email: { $regex: regexPattern } });
  };
  

export const OrdersService = {
  createOrdersInDB,
  getAllOrSearchOrdersFromDB,
};
