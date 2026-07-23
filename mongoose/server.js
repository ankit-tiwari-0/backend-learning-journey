 import express from 'express'
 import dotenv from "dotenv"
 import connectDB from './config/db.js'

dotenv.config()
 const app = express()


app.get("/", (req, res)=>{
    res.send("helllppp")
})





connectDB();

 app.listen(3000, ()=>{
    console.log("server is running 300");
    
 })