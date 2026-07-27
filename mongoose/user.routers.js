import { Router } from "express";

const router = Router();

router.post("/user", (req , res)=>{
   try {
    
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
