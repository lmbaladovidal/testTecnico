import {DataTypes} from 'sequelize'
import db from '../config/connection'

const alias = 'TransactionDetail';
const cols = { 
                id:{ 
                    type: DataTypes.INTEGER(6).UNSIGNED,
                    primaryKey : true,
                    autoIncrement: true,
                    allowNull:false,
                },
                idProduct:{
                    type:DataTypes.INTEGER
                },
                idTransaction:{
                    type:DataTypes.INTEGER
                },

            }
const  config = {
    timestamps: false,

};

const TransactionDetail = db.define(alias,cols,config);

export default TransactionDetail