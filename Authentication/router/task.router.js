import { Router } from "express";
import { addTask, fetchTask } from "../controller/task.controller.js";
import { validate } from "../middleware/session.middleware.js";

const routerr = Router()


routerr.post("/", validate ,addTask)
routerr.get("/", validate, fetchTask)


export default routerr