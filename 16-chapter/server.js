import express from "express"


const app = express()




app.get('/', (req, res)=>{
   

    res.cookie("name", "express" ,{
        maxAge: 1000 * 60 * 60
    })
    res.send('helooo')
    
})



app.listen(3000, ()=>{
    console.log("server is running on 3000");
    
})