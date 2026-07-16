import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'


const app = express()

app.use(session(
    {
        secret: "ankiit",
        saveUninitialized: false,
        resave: false,
        cookie:{
            maxAge: 1000*60*60
        }
    }
))
app.use(cookieParser("ankkkit"))

app.get("/", (req, res)=>{
    console.log(req.session);
    console.log(req.session.id);
    
    res.status(200).send("helooo")
})



app.listen(3000, ()=>{
    console.log("server chal rha hai");
    
})