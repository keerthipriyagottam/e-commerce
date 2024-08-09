const mongoose = require('mongoose');
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
        productName: {
            type: String,
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
        type:String,
        required: true
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