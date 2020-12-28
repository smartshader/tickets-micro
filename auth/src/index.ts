import express from "express";
import bodyParser from "body-parser";

const PORT = "3000"

const app = express();
app.use(bodyParser.json())

app.get('/api/users/current', (req, res) => {
    res.send('Hi there!')
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});