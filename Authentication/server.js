 import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import session from 'express-session'
import router from './router/user.router.js'

dotenv.config()
 const app = express()
 app.use(express.json())
 app.use("/api/user", router)

 app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave:false,
        saveUninitialized:true,
        cookie:{maxAge:600000}
    })
 )


connectDB()
 app.listen(3000, ()=>{
    console.log("server is running");
    
 })