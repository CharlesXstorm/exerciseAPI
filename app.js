const express = require("express");

const app = express();

const exerciseRoute = require("./routes/exerciseRoute");

app.use(express.json());

app.use("/exercise", exerciseRoute);

module.exports = app;
