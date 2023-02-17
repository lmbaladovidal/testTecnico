

import db from "../database/models";
import Product from '../database/models/Product';
import productArr from '../database/dummyGenerator/dataDummyGeneratorProduct';
import { Op, Sequelize } from 'sequelize';


const getProducts= (req,res)=>{
    
        console.log("params",req.params);
        Product.findAll()
        .then(result=>{
            res.json({
                data:result,
                status:200})
        })
        .catch(error=>{console.error('Unable to connect to the database:', error);})
    }

const createProduct = (req,res)=>{

    Product.create({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            quantity:req.body.quantity,})
    .then(response=>{
        res.json({
            reques:req.body,
            msg:response,
            status:201})
    })
    .catch(error=>{
        res.json({
            msg:error,
            status:500})
    })
}

const createDummyProduct = (req,res)=>{
    let product
    res.json(productArr)
    productArr.map(data=>(
        product = Product.create({
            name:data.name,
            description:data.description,
            price:data.price,
            quantity:data.quantity
        })  
    ))
    
}
const selectProducts = (req,res)=>{
    Product.findAll({
        where:{  
            price:{
                [Op.gt]: 50
            },
            quantity:{
                [Op.lt]:20
            }
        }
    }).then(result=>{
        res.json({data:result})
    })
}



const deleteProduct = async (req,res)=>{
    const product = await Product.findOne({
        where:{id:req.params.id}
    });
    res.json(product)
    await product.destroy();
    res.redirect('/api/products');
}


export const methods = {
    getProducts,
    createDummyProduct,
    deleteProduct,
    createProduct,
    selectProducts}
