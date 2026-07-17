import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createTask, deleteTask, getAlltask, updateTask } from "../controller/task.controller.js";

const routes = Router()



routes.get("/", authMiddleware, getAlltask)
routes.post("/", authMiddleware, createTask)
routes.put("/:id", authMiddleware, updateTask)
routes.delete("/:id", authMiddleware, deleteTask)

export default routes