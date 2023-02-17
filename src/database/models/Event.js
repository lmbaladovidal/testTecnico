import {DataTypes} from 'sequelize'
import db from '../config/connection'

const alias = 'Event';
const cols = { 
                id:{ 
                    type: DataTypes.INTEGER(6).UNSIGNED,
                    primaryKey : true,
                    autoIncrement: true,
                    allowNull:false,
                },
                description:{
                    type:DataTypes.STRING
                },
            }
const  config = {
    timestamps: false,

};

const Event = db.define(alias,cols,config);

export default Event
