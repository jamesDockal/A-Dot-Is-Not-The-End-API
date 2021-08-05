"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var users_1 = __importDefault(require("./routes/users"));
require("./database");
var books_1 = __importDefault(require("./routes/books"));
var app = express_1.default();
app.use(express_1.default.json());
app.get("/", function (req, res) { return res.send("ok"); });
app.use("/users", users_1.default);
app.use("/books", books_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () { return console.log("Server running on port " + PORT); });
