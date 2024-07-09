// Develop an Express.js route to execute an intricate MongoDB query. Retrieve all products with prices exceeding a specified value ('minPrice').
//  Provide the results sorted by price in descending order. 
const express =require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


const mongoURI = 'mongodb+srv://nitish:nitishruhal1@cluster0.iwldmvb.mongodb.net/';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.use(express.json());
app.use(cors());
const saltRounds=10
app.get("/find",async(req,res)=>{

    const products = await Product.find({price:{$gt:500}}).sort({price:-1})
    res.send(products);
})



app.listen(5000, () => {
    console.log("server is running on port number 5000");
})