import { Router } from "express";
import UsersController from "../controllers/Users";
import UsersMiddleware from "../middlewares/User";

const UsersRouter = Router();

const { register } = new UsersController();

const { registerCrendentials } = new UsersMiddleware();

UsersRouter.post("/register", registerCrendentials, register);

export default UsersRouter;
