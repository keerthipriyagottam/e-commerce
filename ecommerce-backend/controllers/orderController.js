const orderCollection=require('../models/orderSchema');


// create order
const createOrder = async(req,res)=>{
    try {
        const{userId,address,products}=req.body;
        const newOrder = new orderCollection({
            userId,
            address,
            products,
            status:"order placed",
            datePlaced:new Date(),
            dateDelivered:null
        });
        const response = await newOrder.save();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

// get all orders

const getOrdersById = async(req,res)=>{
    try {
        const userId = req.params.id;
        const result = await orderCollection.find({userId});
        // if(!result){
        //     res.status(400).json({message: "No related data found"})
        // }
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

module.exports={createOrder,getOrdersById}

