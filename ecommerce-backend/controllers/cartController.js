const userCollection = require('../models/userSchema');

// API to get cart by userId
const cartByUserId = async(req,res)=>{
    try {
        const userId = req.params.userid;
        const showCartById = await userCollection.findById(userId);
        if(!showCartById){
            res.status(400).json("Invalid Id details");
        }
        res.status(200).json(showCartById.cartItems);

        
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}



// API to update cart from content in body
const cartUpdate = async(req,res)=>{
    try {
        const {items}=req.body;
        const userId=req.params.userid;
        // Validate input
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Invalid items array' });
        }

        if (!userId) {
            return res.status(400).json({ error: 'Cart ID is required' });
        }
        const itemUpdate = await userCollection.updateOne({_id:userId},{$set:{cartItems:items}});
        if(!itemUpdate){
            res.status(400).json("item not updated")
        }
        res.status(200).json({ message: 'Cart updated successfully' ,itemUpdate});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}







module.exports={cartByUserId,cartUpdate};