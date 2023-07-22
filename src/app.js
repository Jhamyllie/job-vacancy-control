require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/db");
const userRoute = require("./routes/userRoutes");
const vacancyRoutes = require("./routes/vacancyRoute");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();

const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/user", userRoute);
app.use("/user", vacancyRoutes)

module.exports = app;