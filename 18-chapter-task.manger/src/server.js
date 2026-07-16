import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import authroute from '../routes/auth.routes.js'


const app = express()

//! Global pack
app.use(express.json())



//ROutes

app.get("/", (req , res)=>{
    res.status(200).send("welcome to task MANAGER API ✅")
})

app.use("/auth", authroute)







app.listen(5000, ()=>{
    console.log("server chalta hai naa");
    
})