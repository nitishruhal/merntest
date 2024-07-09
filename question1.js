//Implement an Express.js route that allows an authenticated user (identified by userId from JWT) to
// update their password securely using bcrypt for hashing.  (Provide the github link for the answer)
const express =require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express()

const cors = require('cors')

app.use(express.json());
app.use(cors());
const saltRounds=10
app.get("/",async(req,res)=>{
    let pass=req.body.password
    let hashedPwd = await bcrypt.hash(pass,saltRounds);
    res.json({actualPass:pass,encPass: hashedPwd})
})



app.listen(5000, () => {
    console.log("server is running on port number 5000");
})