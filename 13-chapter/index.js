import express from "express"
import {data} from "./data.js";


const app = express();
const PORT = 3000
app.use(express.json())

app.get("/", (req,res)=>{
    res.status(200).send("Heloo")
})

//indus
app.get("/user/api", (req, res)=>{
    res.status(200).send(data)
})

//query params
app.get("/param", (req, res)=>{
    const {name} = req.query;

    if(name){
        const user = data.filter((user)=>{
            return user.name === name
        })
        console.log("done");
       return res.status(200).send(user) 
       
    }

    res.status(200).send(data)
})


// router param
app.get("/router/:id", (req, res)=>{
    const {id } = req.params
    console.log(typeof id);
    
    const pasedid = parseInt(id);
         
    const user = data.find((user)=>user.id===pasedid)

    res.status(200).send(user)
})

// 2. POST Request (it is for sending data to server)

app.post("/app/post", (req, res)=>{
    const { name , display} = req.body;

    const newuser = {
        id:data.length +1,
        name,
        display
    } 

    data.push(newuser)
     
    
    res.status(201).send(
    {
        message: "User Create",
        data: newuser
    }
    )
})








app.listen(PORT, (req, res)=>{

console.log("server is running on", 3000);

})