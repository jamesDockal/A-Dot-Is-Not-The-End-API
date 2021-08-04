import express from "express";
import UsersRouter from "./routes/users";

import "./database";

const app = express();

app.use(express.json());

app.use("/users", UsersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
