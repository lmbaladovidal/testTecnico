
import db from '../database/config/connection'


const getProducts= async (req,res)=>{
    
    try {
        await db.authenticate();
        res.json("ObteniendoProductos");
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export const methods = {getProducts}