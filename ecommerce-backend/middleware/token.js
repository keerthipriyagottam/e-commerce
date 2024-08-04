const userCollection=require('../models/userSchema');
const jwt =require('jsonwebtoken');
const dotenv=require('dotenv');

const secretKey=process.env.SecretKey

const validateUser= async(req,res,next)=>{
    const token=req.headers.token;
    if(!token){
        res.status(400).json({Error:"Token is required"})
    }
    try {
        const decoded=jwt.verify(token,secretKey)
        req.userId=user._id
        const user=await userCollection.findById(decoded.userId)

        if(!user){
            return res.status(404).json({Error:"user not Found"})
        }
        next()

    }
    
    catch (error) {
        console.error(error);
        return res.status(500).json({Message:"Token not Found"})
    }
}

module.exports = validateUser;