import {DataTypes} from 'sequelize'
import db from '../config/connection'

const alias = 'Product';
const cols = { 
                id:{ 
                    type: DataTypes.INTEGER(6).UNSIGNED,
                    primaryKey : true,
                    autoIncrement: true,
                    allowNull:false,
                },
                name:{
                    type:DataTypes.STRING
                },
                description:{
                    type:DataTypes.STRING
                },
                quantity:{
                    type:DataTypes.INTEGER
                },
                price:{
                    type:DataTypes.DECIMAL
                },
            }
const  config = {
    timestamps: false,

};

const Product = db.define(alias,cols,config);

export default Product  