import express from "express"
import cookieParser from "cookie-parser"


const app = express()

app.use(cookieParser("secter"))




app.get('/', (req, res)=>{
   
// //! how cookies set
    res.cookie("name", "express" ,{
        maxAge: 1000 * 60 * 60,
        signed: true

    })
    res.send('helooo')
    
})


app.get('/product', (req, res)=>{

    console.log('cookies:', req.cookies);
    console.log('singcookies', req.signedCookies);
    

    if (req.cookies.name && req.cookies.name === "express") {
      res.status(200).send({
        id: 1,
        "name": "Item",
        "price": "$100"
    })  
    }
    res.status(404).send("not allow ")
    
    
})



app.listen(3000, ()=>{
    console.log("server is running on 3000");
    
})


//&& ?? operator