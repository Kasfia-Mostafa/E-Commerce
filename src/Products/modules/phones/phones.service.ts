import { TPhones } from './phones.interface';
import { Phones } from './phones.model';

// Add phone
const createPhonesInDB = async (payload: TPhones) => {
  const result = await Phones.create(payload);
  return result;
};

// Get all phones
const getAllPhonesFromDB = async () => {
  const result = await Phones.find();
  return result;
};

// Get all phone by id
const getSingleProductFromDB = async (id: string) => {
  const result = await Phones.findById(id);
  return result;
};

//  Update product info
const updateProductByIDInDB = async (id: string,updateData:any) => {
  const updatedPhone = await Phones.updateOne({
    _id:id,
    $set:updateData
  }); 
  return updatedPhone;
};

// Delete product
const deleteProductFromDB = async (id: string) => {
    const result = await Phones.deleteOne({ _id: id });
    return result;
  };

export const PhonesServices = {
  createPhonesInDB,
  getAllPhonesFromDB,
  getSingleProductFromDB,
  updateProductByIDInDB,
  deleteProductFromDB
};

export { updateProductByIDInDB };
