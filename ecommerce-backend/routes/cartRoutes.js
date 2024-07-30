const express = require('express');
const cartController = require('../controllers/cartController');


const router = express.Router();

router.post('/createCart',cartController.createCart)

module.exports = router;