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

const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    tasks:[TaskSchema]
})

const User = mongoose.model("User",UserSchema)
export default User