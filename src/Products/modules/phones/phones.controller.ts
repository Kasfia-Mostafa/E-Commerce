import { Request, Response } from 'express';
import { PhonesServices } from './phones.service';
import phoneSchema from './phones.zod.validation';


// Adding phones to the site
const createPhones = async (req: Request, res: Response) => {
  try {
    const zodParseData = phoneSchema.parse(req.body);
    // Create phones in the database
    const result = await PhonesServices.createPhonesInDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
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

// Get all phones data
const getAllOrSearchPhones = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const products = await PhonesServices.getAllOrSearchPhonesFromDB(
      searchTerm
    );
    const message = searchTerm
      ? `Products matching search term '${searchTerm}' fetched successfully!`
      : 'All phones fetched successfully!';

    res.status(200).json({
      success: true,
      message,
      data: products,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const getSinglePhone = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await PhonesServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
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

//  Update product info
const updatePhone = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateDataProduct = req.body;
    const updatedPhone = await PhonesServices.updateProductByIdInDB(productId, updateDataProduct);
    
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: updatedPhone,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// delete product
const deletePhone = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const deletedPhone = await PhonesServices.deleteProductFromDB(productId);

    if (!deletedPhone) {
      return res.status(404).json({
        success: false,
        message: 'Product not found!',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const PhonesControllers = {
  createPhones,
  getAllOrSearchPhones,
  getSinglePhone,
  updatePhone,
  deletePhone,
};
