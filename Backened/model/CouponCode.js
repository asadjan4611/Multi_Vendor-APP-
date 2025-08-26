const mongoose = require('mongoose');

const CouponCodeSchema = mongoose.Schema({

    name:{
        type:String,
        required:[true,"Enter your Coupon code name"]
    },
    value:{
        type:Number,
        required:true
    },
    minAmount:{
        type:Number
    },
    maxAmount:{
        type:Number
    },
    seller:{
        type:Object,
        required:true
    },
    selectedProduct:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model("CouponCode",CouponCodeSchema);