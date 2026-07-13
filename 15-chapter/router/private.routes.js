import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const pvt = Router();

// dashboard ( Accesstoken)

pvt.get("/dashboadr",authMiddleware, (req, res)=>{
    res.status(200).send({
        message: `welcome to dash board ${req.user.name}`,
    })
})


export default pvt