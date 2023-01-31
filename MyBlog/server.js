const express = require("express");

const app = express();
const PORT = 8000;

app.get("/home", (req, res) => {
    res.send("Hello World!");
});

app.post("/create", (req, res) => {
    res.send("Creating a new blog.");
});

app.patch("/update", (req, res) => {
    res.send("Updating a new blog");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});