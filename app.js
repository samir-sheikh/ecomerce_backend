const express = require('express');
const app = express();

app.use(express.json())


//raouts import
const product = require('./raouts/productRaout')
app.use("/api/v1" ,product);


module.exports = app;