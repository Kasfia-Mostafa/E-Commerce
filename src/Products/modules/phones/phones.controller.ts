import { Request, Response } from 'express';
import { PhonesServices } from './phones.service';
import { Phones } from './phones.model';

// Adding phones to the site
const createPhones = async (req: Request, res: Response) => {
  try {
    const phonesData = req.body;
    const result = await PhonesServices.createPhonesInDB(phonesData);
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
const getAllPhones = async (req: Request, res: Response) => {
  try {
    const result = await PhonesServices.getAllPhonesFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
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
    const result = await PhonesServices.updateProductByIDInDB(
      productId,
      updateDataProduct
    );
    const updatedEachPhone = await Phones.findById(productId);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: updatedEachPhone,
    });
  } catch (err) {
    console.log(err);
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
    const result = await PhonesServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export const PhonesControllers = {
  createPhones,
  getAllPhones,
  getSinglePhone,
  updatePhone,
  deletePhone,
};
