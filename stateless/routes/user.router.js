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

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid username or password"
            });
        }

        // Create a token using JWT
        const token = jwt.sign(
            {
                id: user._id,
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});
export default router;