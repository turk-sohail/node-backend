const express = require("express");
const apiRoutes = require("./routes/");
const bodyParser = require("body-parser");


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api", apiRoutes);



module.exports = app;
