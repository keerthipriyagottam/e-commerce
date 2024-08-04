const cartCollection = require('../models/cartSchema');

// API to create cart
const createCart = async(req,res)=>{
    try {
        const newCart = new cartCollection({items: []});
        const response = await newCart.save();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

// API to get cart by cartId
const cartById = async(req,res)=>{
    try {
        
        const cartId = req.params.id;
        const showCartById = await cartCollection.findById(cartId);
        if(!showCartById){
            res.status(400).json("Invalid Id details");
        }
        res.status(200).json(showCartById);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}



// API to update cart from content in body
const cartUpdate = async(req,res)=>{
    try {
        const {items}=req.body;
        const cartById=req.params.id;
        // Validate input
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Invalid items array' });
        }

        if (!cartById) {
            return res.status(400).json({ error: 'Cart ID is required' });
        }
        const itemUpdate = await cartCollection.updateOne({_id:cartById},{$set:{items:items}});
        if(!itemUpdate){
            res.status(400).json("item not updated")
        }
        res.status(200).json({ message: 'Cart updated successfully' ,itemUpdate});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}







module.exports={createCart,cartById,cartUpdate};