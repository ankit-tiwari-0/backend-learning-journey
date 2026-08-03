import { Router } from "express";

const router = Router()

router.get("/" , AuthenticatorAssertionResponse , (req, res)=>{
    res.status(200).json({message: "Welcome to private routes", user:req.user})
})


export default router;