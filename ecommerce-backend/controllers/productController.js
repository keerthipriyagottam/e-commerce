const productCollection = require('../models/productSchema');
const { ObjectId } = require('mongodb');


//API to show all products
const getAllProducts = async(req,res)=>{
    try {
        const products = await productCollection.find();
        res.status(200).json(products)
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

// API to show product by id
const getProductById = async(req,res)=>{
    try {
        const productId = req.params.id;
        console.log("thokki");
        console.log(productId);
        const productResult = await productCollection.findById(productId);
        if(!productResult){
            res.status(400).json({message:`No Product Found`});
        }
        res.status(200).json(productResult);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}

// API to addProducts
const addProducts = async(req,res)=>{
    try {
        const products = req.body
        if( !Array.isArray(products) || products.length==0) {
            res.status(400).json({message:"Invalid input"})
        }
        const newproducts = await productCollection.insertMany(products);
        res.status(200).json(newproducts);

    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
    
}

//API to deelete product
const deleteProductById = async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await productCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 1) {
            return res.status(200).json({ message: 'Product deleted successfully' });
          } else {
            return res.status(404).json({ error: 'Product not found' });
          }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}









module.exports = {getAllProducts,getProductById,addProducts,deleteProductById}