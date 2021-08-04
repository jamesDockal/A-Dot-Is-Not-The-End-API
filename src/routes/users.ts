import { Router } from "express";
import UsersController from "../controllers/Users";
import UsersMiddleware from "../middlewares/User";

const UsersRouter = Router();

const { register, login } = new UsersController();

const { registerCrendentials, userAlredyRegistered, userExists } =
  new UsersMiddleware();

UsersRouter.post(
  "/register",
  registerCrendentials,
  userAlredyRegistered,
  register
);
UsersRouter.post("/login", registerCrendentials, userExists, login);

export default UsersRouter;
