const mongoose = require('mongoose')

const CouponSchema = mongoose.Schema({
    couponName: String,
    type: String, 
    startDate: Date,
    endDate: Date,
    discountAmount: Number,
    userGroupName: String

});

module.exports = mongoose.model('Coupon', CouponSchema);
