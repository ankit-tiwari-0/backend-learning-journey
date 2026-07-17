import routes from "../routes/task.routes.js"
import { readTask, writeTask } from "../utils/file.utils.js"

export const getAlltask = async(req , res)=>{
    if (!req.session.user) {
        return res.status(401).json({message: "chala jaa"})
    }

    const task = await readTask();
    res.json(task.filter((task)=>task.username === req.session.user.username))
}

export const createTask = async(req , res)=>{

     const {title , description} = req.body;
    const tasks = await readTask();

    const newTask = {
        id:Date.now(),
        username:req.session.user.username,
        title,
        description,
        completed:false
    }

    tasks.push(newTask);
    await writeTask(tasks);

    res.status(201).json(newTask)

}

export const updateTask = (req, res) => {

    const { id } = req.params;
    const { title, description, completed } = req.body;

    const tasks = readTask();

    const task = tasks.find(
        task =>
            task.id === Number(id) &&
            task.username === req.session.user.username
    );

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    if (title !== undefined) {
        task.title = title;
    }

    if (description !== undefined) {
        task.description = description;
    }

    if (completed !== undefined) {
        task.completed = completed;
    }

    writeTask(tasks);

    res.json({
        message: "Task updated",
        task
    });
};
export const deleteTask = ()=>{

}