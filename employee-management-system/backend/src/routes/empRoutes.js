const express = require("express");
const router = express.Router();
const {getEmployees} = require("../controllers/empController");
router.get("/",getEmployees);
module.exports = router;