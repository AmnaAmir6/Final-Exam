import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import AuthRouter from "./routes/AuthRoute.js";
import TaskRouter from "./routes/TaskRoute.js";

const URI = process.env.MONGODB_URI
const port = 4000
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(URI);


mongoose.connection.once("open",()=>{
    console.log("Database Connected.");
})

app.use("/auth",AuthRouter)
app.use("/task",TaskRouter)

app.listen(port,()=>{
    console.log(`Server Listening to port ${port}`);
})