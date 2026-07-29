import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    userID: {type:mongoose.Schema.Types.ObjectId, ref:"UserModel", required:true},
    title:{
        type: String,
        required: true
    },
    description:{
        type:String
    }
}, {timestamps: true})

const TASK = mongoose.model("Task", taskSchema)

export default TASK