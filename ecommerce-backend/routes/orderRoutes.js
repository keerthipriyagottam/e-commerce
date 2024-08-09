const express = require('express');
const orderController = require('../controllers/orderController');


const router = express.Router();


router.post('/newOrder',orderController.createOrder);
router.get('/allOrders/:id',orderController.getOrdersById);
router.post('/changeOrderStatus/:orderId/:status',orderController.changeOrderStatus);
router.get('/allOrders',orderController.getAllOrders);

module.exports=router;