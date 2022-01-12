const express = require('express');
const app = express();
const cors = require('cors');
const bodyParse = require('body-parser');
const textRouter = require('./routers/text');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chaniRozenberg:rozenberg12!@cluster0.9tzgc.mongodb.net/project?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use('/',bodyParse.json())

app.use(cors());

app.use('/text', textRouter);

app.listen(5050,()=>{console.log("run on localhost:5050")})

