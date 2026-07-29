import { Router } from "express";
import { addTask, fetchTask } from "../controller/task.controller.js";

const routerr = Router()


routerr.post("/", addTask)
routerr.get("/", fetchTask)


export default routerr