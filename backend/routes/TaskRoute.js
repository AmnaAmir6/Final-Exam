import express from "express";
import { CreateTask, DeleteTask, GetAllTask ,getTaskbyID, UpdateTask} from "../controllers/TaskController.js";

const TaskRouter = express.Router()

TaskRouter.post("/task",CreateTask);
TaskRouter.delete("/task",DeleteTask);
TaskRouter.get("/task",GetAllTask);
TaskRouter.get("/task/:id",getTaskbyID);
TaskRouter.put("/task",UpdateTask);

export default TaskRouter