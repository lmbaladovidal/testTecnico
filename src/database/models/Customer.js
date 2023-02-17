import {DataTypes} from 'sequelize'
import db from '../config/connection'

const alias = 'Customer';
const cols = { 
                id:{ 
                    type: DataTypes.INTEGER(6).UNSIGNED,
                    primaryKey : true,
                    autoIncrement: true,
                    allowNull:false,
                },
                idType:{
                    type:DataTypes.STRING
                },
                name:{
                    type:DataTypes.STRING
                },
                lastname:{
                    type:DataTypes.STRING
                },
                dateCreation:{
                    type:DataTypes.DATE
                },
            }
const  config = {
    timestamps: false,

};

const Customer = db.define(alias,cols,config);

export default Customer
