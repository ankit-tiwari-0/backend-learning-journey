import express from 'express'


const app = express()

app.get("/", (req, res)=>{
    res.status(200).send("helooo")
})


app.listen(3000, ()=>{
    console.log("server chal rha hai");
    
})