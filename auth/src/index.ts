import express from "express";
import bodyParser from "body-parser";
import 'express-async-errors';

import { currentUserRouter } from "./routes/current-user";
import { signUpRouter } from "./routes/signup";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { errorHandler } from "./middlewares/error";
import { NotFoundError } from "./errors/not-found-error";

const PORT = "3000"

const app = express();
app.use(bodyParser.json())

app.use(currentUserRouter);
app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});