const express = require("express");
const router = express.Router();
const {getEmployees,getEmployeesById,createEmployee,updateEmployee,deleteEmployee} = require("../controllers/empController");

router.get("/",getEmployees);
router.get("/:id",getEmployeesById);
router.post("/",createEmployee);
router.patch("/:id",updateEmployee);
router.delete("/:id",deleteEmployee);

module.exports = router;