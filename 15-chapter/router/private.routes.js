import { Router } from "express";

const pvt = Router();

// dashboard ( Accesstoken)

pvt.get("/dashboadr", (req, res)=>{
    res.status(200).send({
        message: "welcome to dash board"
    })
})


export default pvt