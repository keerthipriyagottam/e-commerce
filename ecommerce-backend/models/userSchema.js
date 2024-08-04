const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'address'
    }],
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
            ref:'cart',
            required: true
    },


});

const User = mongoose.model("user",userSchema);
module.exports = User