import Task from "../models/task.js";
import User from "../models/user.js";

export const CreateTask =async (req,res)=>{
//     try {
//     const {username,name,description,dueDate}=req.body;
//     const user = User.findOne({username});
//     if(!user)
//     {
//         res.status(400).send("user doesnot exists");
//     }
//     const task = {
//         name,description,dueDate
//     }
//     user.tasks.push(task);
//     await user.save();
//     res.status(201).json({task});
// } catch (error) {
//         res.status(500).send("something went wrong");
// }
    try {
    const {name,description,dueDate}=req.body;
    const existingtask = await Task.findOne({name});
    if(existingtask)
    {
        res.status(400).send("this name for task already exists");
    }
    const task = new Task({
        name,description,dueDate
    })
    await task.save();
    res.status(201).json(task);
} catch (error) {
        res.status(500).send("something went wrong");
}
}

export const DeleteTask =async (req,res)=>{
    
    try {
        const{id}=req.params
        const tasks = await Task.find();
        if(!tasks)
        {
            res.status(400).send("no tasks found");
        }
        tasks = task.filter(task => task._id.toString() !== id);
        res.status(201).json({tasks});
    } catch (error) {
            res.status(500).send("something went wrong");
    }

}

export const UpdateTask =async (req,res)=>{
    try {
        const {name,description,dueDate}=req.body;
        const task = await Task.findOne({name});
        if(!task)
        {
            res.status(400).send("this name task doesnt exists");
        }
        await task.save({
            name:name || task.name,
            description: description || task.description,
            dueDate:dueDate || task.dueDate
        })
        res.status(201).json({task});
    } catch (error) {
            res.status(500).send("something went wrong");
    }
}

export const GetAllTask =async (req,res)=>{
    try {
        const tasks =await Task.find();
        if(!tasks)
        {
            res.status(400).send("no tasks found");
        }
        
        res.status(201).json({tasks});
    } catch (error) {
            res.status(500).send("something went wrong");
    }
}

export const getTaskbyID =async (req,res)=>{
    try {
        const{id}=req.params
        const task = await Task.findById(id);
        if(!task)
        {
            res.status(400).send("this name task doesn't exists");
        }
        
        res.status(201).json({task});
    } catch (error) {
            res.status(500).send("something went wrong");
    }
}