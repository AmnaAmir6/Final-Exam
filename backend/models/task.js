import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
        unique:true,
    },
    dueDate:{
        type:Date,
        required:true,
        unique:true,
    }

})

const Task = mongoose.model("Task",TaskSchema)
export default Task