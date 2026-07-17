import routes from "../routes/task.routes.js"
import { readTask, writeTask } from "../utils/file.utils.js"

export const getAlltask = async(req , res)=>{
    if (!req.session.user) {
        return res.status(401).json({message: "chala jaa"})
    }

    const task = await readTask();
    res.json(task.filter((task)=>task.username === req.session.user.username))
}

export const createTask = ()=>{

}

export const updateTask = ()=>{

}

export const deleteTask = ()=>{

}