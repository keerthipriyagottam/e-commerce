const mongoose = require('mongoose');
const CompleteAddress = require('./addressSchema');
const Product = require('./productSchema');
const orderSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            required: true
    },
    products:[{
        productId:
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'products',
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    status:{
        type:String,
        required:true
    },
    address:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'address',
        required: false
    },
    datePlaced:{
        type:Date,
        required:true
    },
    dateDelivered:{
        type:Date,
        required:false
    }

});

const Order = mongoose.model("order",orderSchema);
module.exports = Order