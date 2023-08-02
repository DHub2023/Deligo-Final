const mongoose = require ('mongoose');

const OrderSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    products:[{
        productId:{type:String},
        quantity:{ type: Number,required:true },

    }],
    address:{ type: String,required:true},
    status:{ type: Number,required:true},
    amount:{ type: Number,default:'Pending', required:true}
},{ timestamps:true });

export default mongoose.model("Order",OrderSchema);
