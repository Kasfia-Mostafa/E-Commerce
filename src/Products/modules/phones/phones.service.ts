import { TPhones } from "./phones.interface";
import { Phones } from "./phones.model";

const  createPhonesInDB = async (payload:TPhones)=> {
    const result = await Phones.create(payload);
    return result;
}
const  getAllPhonesFromDB = async ()=> {
    const result = await Phones.find();
    return result;
}

export const PhonesServices = {
    createPhonesInDB,getAllPhonesFromDB
}