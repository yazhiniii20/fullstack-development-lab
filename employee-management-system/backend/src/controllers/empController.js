const Employee = require("../models/employeeModel");

const getEmployees = async(req,res) =>{
  try{
      const employees = await Employee.find();
      return res.status(200).json({
        message : "Employees fetched successfully",
        employees
      });
  }catch(error){
    console.log(error);
    return res.status(500).json({
        message : "Internal Server Error"
    });
  }
};
module.exports = {getEmployees};