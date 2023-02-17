

import db from '../database/config/connection'
import Product from '../database/models/Product';


const getProducts= (req,res)=>{
    
        Product.findAll()
        .then(result=>{
            res.json(result)
        })
        .catch(error=>{console.error('Unable to connect to the database:', error);})
    }

const createProduct = (req,res)=>{
    Product.create()
}

const deleteProduct = (req,res)=>{
    
}

export const methods = {getProducts}
