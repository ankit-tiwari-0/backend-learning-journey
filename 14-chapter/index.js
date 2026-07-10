import express from 'express'
import useRouter from './router/user.routes.js';



const app = express()

app.use("/chal", useRouter)

function sayMiddleware(req, res , next){
    console.log("hi I am middleware 😉");
    next()
}

app.use(sayMiddleware) /// waht ever u call in app.use(is GLOBAL MIDDLEWARE)

app.get("/", (req, res)=>{
    res.send("hello")
})


app.listen(3000, (req, res)=>{
    console.log("sever is running on 3000");
    
})

