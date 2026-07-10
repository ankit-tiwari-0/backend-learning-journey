import { Router } from "express";


const useRouter = Router();


useRouter.get("/create-user", (req, res)=>{
    res.send("users")
})
useRouter.get("/create-us", (req, res)=>{
    res.send("users")
})
useRouter.get("/create-use", (req, res)=>{
    res.send("users")
})


export default useRouter;