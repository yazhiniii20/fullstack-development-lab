const express = require("express");
const app = express();
const empRoutes = require("./routes/empRoutes");
app.use(express.json());
app.use("/api/employees",empRoutes);
module.exports = app;