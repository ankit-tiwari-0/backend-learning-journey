import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'


const app = express()

//! Global pack

app.use(cookieParser)
app.use(session)












app.listen(3000, ()=>{
    console.log("server chalta hai naa");
    
})