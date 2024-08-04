const express = require('express');
const orderController = require('../controllers/orderController');


const router = express.Router();


router.post('/newOrder',orderController.createOrder);
router.get('/allOrders/:id',orderController.getOrdersById);

module.exports=router;