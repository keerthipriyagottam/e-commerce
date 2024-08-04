const mongoose=require('mongoose');
const Address=mongoose.Schema({
    line1:{
        type:String,
        required:true
    },
    line2:{
        type:String,
        required:true
    },
    Street:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Pincode:{
        type:Number,
        required:true
    },
    Landmark:{
        type:String,
        required:true
    }

})

const CompleteAddress=mongoose.model("address",Address);
module.exports=CompleteAddress