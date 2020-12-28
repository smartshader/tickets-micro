import express from "express";
import bodyParser from "body-parser";
import { currentUserRouter } from "./routes/current-user";
import { signUpRouter } from "./routes/signup";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";

const PORT = "3000"

const app = express();
app.use(bodyParser.json())

app.use('/api/users', currentUserRouter);
app.use('/api/users', signUpRouter);
app.use('/api/users', signInRouter);
app.use('/api/users', signOutRouter);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});