const express = require("express");
const router = express.Router();
const {getEmployees,getEmployeesById,createEmployee,updateEmployee,deleteEmployee} = require("../controllers/empController");
const {validateObjectId} = require("../middleware/validateObjectId");

router.get("/",validateObjectId,getEmployees);
router.get("/:id",validateObjectId,getEmployeesById);
router.post("/",validateObjectId,createEmployee);
router.patch("/:id",validateObjectId,updateEmployee);
router.delete("/:id",validateObjectId,deleteEmployee);

module.exports = router;