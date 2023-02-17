import {DataTypes} from 'sequelize'
import db from '../config/connection'

const alias = 'Transaction';
const cols = { 
                id:{ 
                    type: DataTypes.INTEGER(6).UNSIGNED,
                    primaryKey : true,
                    autoIncrement: true,
                    allowNull:false,
                },
                idCustomer:{
                    type:DataTypes.INTEGER
                },
                totalPrice:{
                    type:DataTypes.DECIMAL
                },
                taxes:{
                    type:DataTypes.DECIMAL
                },
                date:{
                    type:DataTypes.DATE
                },
            }
const  config = {
    timestamps: false,

};

const Transaction = db.define(alias,cols,config);

export default Transaction
