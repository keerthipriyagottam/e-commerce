const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    items: [{
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
    }]
});

const Cart = mongoose.model("cart",cartSchema);
module.exports = Cart