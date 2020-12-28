import express from "express";
import bodyParser from "body-parser";
import 'express-async-errors';
import mongoose from 'mongoose';
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signUpRouter } from "./routes/signup";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { errorHandler } from "./middlewares/error";
import { NotFoundError } from "./errors/not-found-error";

const PORT = "3000";

const app = express();

app.set('trust proxy', true);

app.use(bodyParser.json());
app.use(cookieSession({
    signed: false,
    secure: true,
}));

app.use(currentUserRouter);
app.use(signUpRouter);
app.use(signInRouter);
app.use(signOutRouter);

app.all('*', async () => {
    throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('connected to mongodb');
    } catch (err) {
        console.error(err);
    }

    app.listen(PORT, () => {
        console.log(`auth-api is running at https://localhost:${PORT}`);
    });
};

start();
