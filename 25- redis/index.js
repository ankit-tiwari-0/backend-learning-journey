const express = require("express")
const redis = require("./client")
const axios = require("axios")


const app = express()



app.get("/", (req, res)=>{
    res.send("ok")
})


app.listen(5000, ()=>{
    console.log("server up");
    
})