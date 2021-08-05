"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Users_1 = __importDefault(require("../controllers/Users"));
var User_1 = __importDefault(require("../middlewares/User"));
var UsersRouter = express_1.Router();
var _a = new Users_1.default(), register = _a.register, login = _a.login;
var _b = new User_1.default(), registerCrendentials = _b.registerCrendentials, userAlredyRegistered = _b.userAlredyRegistered, userExists = _b.userExists;
UsersRouter.post("/register", registerCrendentials, userAlredyRegistered, register);
UsersRouter.post("/login", registerCrendentials, userExists, login);
exports.default = UsersRouter;
