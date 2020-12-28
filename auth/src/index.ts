import express from "express";
import bodyParser from "body-parser";

const PORT = "4000"

const app = express();
app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});