const express = require('express');
const router = express.Router();
const couponModel = require('../models/coupon');
const getData = require('./../data/getData')

router.get('/:strart' , async (request, response) => {
    const coupons = await couponModel.find();
    try{
        response.send(coupons);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

// router.post('/' , async (request, response) => {
//     try{
//         const coupon = await new couponModel(request.body).save();
//         response.send(coupon);
//     }
//     catch (error) {
//         response.status(500).send(error);
//     }
// })

router.post('/' , async (request, response) => {
    const couponsList = getData.createCoupons();
    try{
        couponsList.forEach(async coupon => {
            await new couponModel(coupon).save();
        });
        response.send(couponsList);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.put('/:id' , async (request, response) => {
    try{
        const coupon = await couponModel.updateOne(
            {"_id": request.params.id},{$set:{
                "couponName": request.body.couponName,
                "type": request.body.type,
                "startDate":request.body.startDate,
                "endDate": request.body.endDate,
                "discountAmount": request.body.discountAmount,
                "userGroupName": request.body.discountAmount
            }});
        response.send(coupon);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.delete('/:id' , async (request, response) => {
    try{
        const coupon = await couponModel.deleteOne({"_id":request.params.id});
        response.send(coupon);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.delete('/' , async (request, response) => {
    try{
        const coupon = await couponModel.deleteMany();
        response.send(coupon);
    }
    catch (error) {
        response.status(500).send(error);
    }
})


module.exports = router