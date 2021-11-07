const express = require('express');
const router = express.Router();
const { getAllproduct } = require('../controllers/productController');




router.route("/products").get(getAllproduct)









module.exports= router;