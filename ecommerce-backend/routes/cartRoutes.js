const express = require('express');
const cartController = require('../controllers/cartController');


const router = express.Router();

router.post('/createCart',cartController.createCart)
router.get('/cartbyid/:id',cartController.cartById)
router.post('/update/:id',cartController.cartUpdate);

module.exports = router;