import { Router } from "express";
import { authentication } from "../middleware/auth.middleware.js";

const router = Router()

router.get("/" , authentication , (req, res)=>{
    res.status(200).json({message: "Welcome to private routes", user:req.user})
})


export default router;