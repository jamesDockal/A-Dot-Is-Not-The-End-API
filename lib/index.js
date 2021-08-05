"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./routes/users"));
var cors_1 = __importDefault(require("cors"));
require("./database");
var books_1 = __importDefault(require("./routes/books"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: ".env.local",
});
console.log("PORT", process.env.PORT);
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
app.get("/", function (req, res) { return res.send("ok"); });
app.use("/users", users_1.default);
app.use("/books", books_1.default);
app.listen(process.env.PORT || 3000, function () {
    return console.log("Server Running on port " + (process.env.PORT || 3000));
});
