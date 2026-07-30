import { Router } from "express";
import User from "../model/user.model.js"
import jwt from "jsonwebtoken"

const router = Router()

router.post("/signup", async (req, res)=>{
    const {username, password} = req.body;

    try {
        const existinguser = await User.findOne({username})
        
        
        if (existinguser) return res.status(400).json({message:"username already exists"})

            const newUser = new User({username, password});

            await newUser.save();
            return res.status(201).json({
    message: "User created successfully"
});
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message:"kuch problem hai",
            err: error.message
        })
    }
})


export default router;