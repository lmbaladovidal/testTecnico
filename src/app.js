import express from 'express';
const mysql = require('mysql');


//ROUTES

import productsRoutes from './routes/products.routes'
import customerRoutes from './routes/customer.routes'

const app = express()

app.set("port",4000)
app.use(productsRoutes);
app.use(customerRoutes);

export default app;