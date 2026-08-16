require("dotenv").config();

const app = require("./app.js");
const PORT = process.env.PORT || 3000;
const connectDB = require("./config/db.js");

const startServer = async() => {
    await connectDB();
    app.listen(PORT,() => {
    console.log(`SERVER IS RUNNING ON PORT:${PORT}`);
  });
};

startServer();
