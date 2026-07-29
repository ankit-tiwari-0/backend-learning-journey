import { Router } from "express";

const routerr = Router()


routerr.post("/", addTask)
routerr.get("/", fetchTask)


export default routerr