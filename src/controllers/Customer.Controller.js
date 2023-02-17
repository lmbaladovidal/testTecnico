import db from "../database/config/connection";
import customerArr from "../database/dummyGenerator/dataDummyGenerator";
import Customer from "../database/models/Customer";

const getCustomer = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.json({ data: error, status: 500 });
  }
};

const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create({
      idType: "",
      name: "",
      lastname: "",
      dateCreation: "",
    });
  } catch (error) {}
};

const createBuy = (req,res)=>{

} 

const createEvent = (req,res)=>{
    
}

const createDummyCustomer = async (req, res) => {
    let customer
  try {
    res.send(customerArr)
    //  customerArr.map(data=>(
    //      customer = Customer.create({
    //       idType: data.idType,
    //       name: data.name,
    //       lastname: data.lastname,
    //       dateCreation: data.creationDate
    //     })
    // ))
  } catch (error) {}
};

export const methods = {
  getCustomer: getCustomer,
  createCustomer: createCustomer,
  createDummyCustomer: createDummyCustomer,
};
