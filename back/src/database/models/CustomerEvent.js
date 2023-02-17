import {DataTypes} from 'sequelize'
import db from '../config/connection'

const alias = 'CustomerEvent';
const cols = { 
                id:{ 
                    type: DataTypes.INTEGER(6).UNSIGNED,
                    primaryKey : true,
                    autoIncrement: true,
                    allowNull:false,
                },
                customerId:{
                    type:DataTypes.INTEGER
                },
                eventId:{
                    type:DataTypes.INTEGER
                },
                timeStamp:{
                    type:DataTypes.DATE
                },
            }
const  config = {
    timestamps: false,

};

const CustomerEvent = db.define(alias,cols,config);

export default CustomerEvent
