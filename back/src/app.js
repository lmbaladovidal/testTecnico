import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser'
const mysql = require('mysql');


//ROUTES

import productsRoutes from './routes/products.routes'
import customerRoutes from './routes/customer.routes'
import salesRoutes from './routes/sales.routes'

const app = express()


const whitelist = ["http://localhost:5173"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))



app.use(bodyParser.json()) 
app.set("port",4000)
app.use(productsRoutes);
app.use(customerRoutes);
app.use(salesRoutes);

export default app;