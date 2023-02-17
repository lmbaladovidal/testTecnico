const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const db = new Sequelize('testTecnicoProductos','root','',{
    host:'localhost',
    dialect:'mysql',
    port:3030
    //logging:false
}) // Example for sqlite

export default db;