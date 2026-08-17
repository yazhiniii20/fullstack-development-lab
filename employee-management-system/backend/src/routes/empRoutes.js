const express = require("express");
const router = express.Router();
const {getEmployees,getEmployeesById,createEmployee} = require("../controllers/empController");

router.get("/",getEmployees);
router.get("/:id",getEmployeesById);
router.post("/",createEmployee);

module.exports = router;