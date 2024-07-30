const express = require('express');
const productController = require('../controllers/productController');


const router = express.Router();

router.get('/allProducts',productController.getAllProducts);
router.get('/productById/:id',productController.getProductById)
router.post('/addProducts',productController.addProducts)

module.exports = router;