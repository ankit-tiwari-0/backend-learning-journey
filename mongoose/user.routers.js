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


router.get("/user", async (req , res)=>{
   try {
    const Users = await UserModel.find()

    res.status(200).json({
        success: true,
        data: Users,
        message: "done"
    })
   } catch (error) {
    console.log(error);
    res.status(500).json({
        success: false,
        message: error.message
    })
   }

})


router.put("/user/:id", async (req , res)=>{
    const {id} = req.params;
    const {name, age, weight} = req.body;
    try {
        const updateuser = await UserModel.findByIdAndUpdate(id, {name, age, weight}, {returnDocument:true , runValidators:true});

        if(!updateuser){
            return res.status(401).json({
                success:false,
                message: "usern not "
            })
        }

        res.json({
            success:true,
            user: updateuser
        })
    } catch (error) {
        console.log(error);
    res.status(500).json({
        success: false,
        message: error.message
    })
    }

})


router.delete("/user/:id", async (req , res)=>{
   try {
    const {id} = req.params;
    const delett = await UserModel.findByIdAndDelete(id);
     if (!delett) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: delett,
    });
   } catch (error) {
    res.status(500).json({
        sucess: false,
        messages: "deleted",
        message:error.message
    })
   }

})


export default router; 
