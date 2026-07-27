import { Router } from "express";
import UserModel from "./model/user.model.js";

const router = Router();

router.post("/user", async (req , res)=>{
   try {
    const {name , age , weight} = req.body;

   const newuser = new UserModel({name, age, weight})
   await newuser.save();

   res.status(201).json({
       sucess: true,
       data: newuser
   })
   } catch (error) {
    console.log(error);
    res.status(500).json({ 
        success:false,
        message:error.message 
    })
   }

})


router.get("/user", (req , res)=>{
   

})


router.put("/user", (req , res)=>{
   

})


router.delete("/user", (req , res)=>{
   

})


export default router; 
