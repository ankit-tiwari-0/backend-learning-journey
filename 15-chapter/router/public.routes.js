import { Router } from "express";
import { generateToken } from "../utils/token-utils.js";

const userRouter = Router();

userRouter.get("/generate", (req, res)=>{
    const token = generateToken();

    res.status(200).send({
        message: "Token generated please save it for future",
        token: token
    })
} )


userRouter.get("/", (req, res)=>{
      
    res.status(200).send({
        message: "Welcome to the hhome🛖"
    })
})

export default userRouter