const express = require("express");
const cors = require("cors");

const app = express();
const empRoutes = require("./routes/empRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/employees",empRoutes);

module.exports = app;