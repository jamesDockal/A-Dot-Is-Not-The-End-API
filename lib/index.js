"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
app.get("/", function (req, res) { return res.send("ok"); });
// app.use("/users", UsersRouter);
// app.use("/books", BooksRouter);
app.listen(process.env.PORT || 3000, function () {
    return console.log("Server running on port " + (process.env.PORT || 3000));
});
