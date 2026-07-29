 import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'
import session from 'express-session'
import router from './router/user.router.js'
import routerr from './router/task.router.js'

dotenv.config()
 const app = express()
 app.use(express.json())
 
 app.use(
    session({
       secret: process.env.SECRET_KEY,
       resave:false,
       saveUninitialized:true,
       cookie:{maxAge:600000}
      })
   )
   
   app.use("/api/user", router)
   app.use("/api/task", routerr)

connectDB()
 app.listen(3000, ()=>{
    console.log("server is running");
    
 })