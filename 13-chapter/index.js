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

// *3 PUT Request (UPDATE ALL FIELD)

app.put("/api/p/:id", (req , res)=>{
    const {body , params:{id},} = req;

    const parseId = parseInt(id);
    const userINDEX = data.findIndex((user)=>user.id === parseId);

    if(userINDEX === -1){
       res.status(404).send("user Not Found")
    }
   
    data[userINDEX] = {
        id: parseId,
        ...body
    }

    res.status(200).send({
        message: "User upd",
        data: data[userINDEX]
    })
})

//4.PATCH REquest (update specific field)

app.patch("/api/p/:id", (req , res)=>{
    const {body , params:{id},} = req;

    const parseId = parseInt(id);
    const userINDEX = data.findIndex((user)=>user.id === parseId);

    if(userINDEX === -1){
       res.status(404).send("user Not Found")
    }
   
    data[userINDEX] = {
        ...data[userINDEX],
        ...body
    }

    res.status(200).send({
        message: "User upd",
        data: data[userINDEX]
    })
})

app.delete("/api/p/:id", (req, res)=>{
    const {id} = req.params;
    
        const paramid = Number(id);

    const userIndex = data.findIndex((user)=>user.id === paramid);

    if (userIndex === -1){
       res.status(404).send("user not ");
    }

    const deletuser = data.splice(userIndex, 1);

    res.status(200).json({
        message: "user deleted",
        data: deletuser[0]
    })
})


app.listen(PORT, (req, res)=>{

console.log("server is running on", 3000);

})