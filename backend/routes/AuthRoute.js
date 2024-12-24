import express from "express";
import { LoginBackUser, LoginUser, SiguUpUser } from "../controllers/AuthController.js";

const AuthRouter = express.Router()

AuthRouter.post("/login",LoginUser);
AuthRouter.post("/signup",SiguUpUser);
AuthRouter.get("/loginBack",LoginBackUser);

export default AuthRouter