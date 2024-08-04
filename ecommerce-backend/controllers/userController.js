const userCollection=require('../models/userSchema');
const cartCollection=require('../models/cartSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv');


dotenv.config();
const secretKey=process.env.secretKey;


// API to register
const register=async(req,res)=>{
    try {
        const {password,name,email}=req.body;
        const newCart = new cartCollection({items: []});
        const newCartResponse = await newCart.save();
        const newCartId = newCartResponse._id;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user=new userCollection({
            password: hashedPassword,
            email,
            name,
            address:[],
            cart:newCartId
        })
        const userResponse= await user.save()
        res.status(200).json(userResponse);
    } catch (error) {
        console.log(error);
        res.status(500).json({message:`Internal Error: Contact support`});
    }
}
// API for login
const login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const userAvailable=await userCollection.findOne({email});
        console.log(userAvailable)
        if(!userAvailable ||!await(bcrypt.compare(password,userAvailable.password)) ){
            res.status(400).json({message:"invalid credentials"})
        } else {
            const token=jwt.sign({userId:userAvailable._id},secretKey,{expiresIn:"1h"})
            res.status(200).json({succes:"Login Successful",token});
            console.log("Token Generated",token);
        }
    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports={register,login};