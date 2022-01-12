const express = require('express');
const router = express.Router();
const textModel = require('../models/text');

router.get('/' , async (_, response) => {
    const texts = await textModel.find({});
    try{        
        response.send(texts);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.get('/maxId' , async (_, response) => {
    const maxId = await textModel.find().sort({"id":-1}).limit(1);
    try{        
        response.send(maxId);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.get('/:id' , async (request, response) => {
    const texts = await textModel.find({"id":request.params.id});
    try{
        response.send(texts);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.post('/' , async (request, response) => {
    try{
        const text = await new textModel(request.body).save();
        response.send(text);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.put('/' , async (request, response) => {
    try{
        const text = await textModel.updateOne(
            {"id":request.body.id},
            {"text":request.body.text, "password":request.body.password}
            );
        response.send(text);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

router.delete('/:id' , async (request, response) => {
    try{
        const text = await textModel.deleteOne({"id":request.params.id});
        response.send(text);
    }
    catch (error) {
        response.status(500).send(error);
    }
})

module.exports = router