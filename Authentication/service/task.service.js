import TASK from "../model/task.model.js"

export const createTask = async(useImperativeHandle, title, description)=>{
    const task = new TASK({userID, title, description});
    return await task.save()
}


export const getTasks = async (userID) => {
    return await TASK.find({userID}).sort({createdAt: -1})
}