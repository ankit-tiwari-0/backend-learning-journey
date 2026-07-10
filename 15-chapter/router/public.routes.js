import { Router } from "express";

const userRouter = Router();

userRouter.get("/generate", (req, res)=>{
    const token = "token";

    res.status(200).send({
        message: "Token generated please save it for future",
        token: token
    })
})