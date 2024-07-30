const cartCollection = require('../models/cartSchema');

// API to create cart
const createCart = async(req,res)=>{
    try {
        const newCart = new Cart({items: []});
        const response = await newCart.save();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

// API to get cart by cartId

// API to update cart from content in body

module.exports={createCart};