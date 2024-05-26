import { Request, Response } from 'express';
import { PhonesServices } from './phones.service';

// Adding phones to the site
const createPhones = async (req: Request, res: Response) => {
  try {
    const phonesData = req.body;
    const result = await PhonesServices.createPhonesInDB(phonesData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
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
      message: "Products fetched successfully!",
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

export const PhonesControllers = {
  createPhones,
  getAllPhones,
};
