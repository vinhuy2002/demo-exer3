const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.json({
        Message: "Hello World"
    });
});

app.get("/home", (req, res) => {
    res.json({
        Message: "Welcome to Home Page"
    })
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
});