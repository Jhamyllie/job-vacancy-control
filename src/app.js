require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/db");
const userRoute = require("./routes/userRoutes")

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

app.use("/user", userRoute);

module.exports = app;