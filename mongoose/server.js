 import express from 'express'


 const app = express()


app.get("/", (req, res)=>{
    res.send("helllppp")
})






 app.listen(3000, ()=>{
    console.log("server is running 300");
    
 })