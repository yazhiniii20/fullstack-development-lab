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

const getEmployeesById = async(req,res) => {
    try{
       const {id} = req.params;
       const employee = await Employee.findById(id);
       if(!employee){          
        return res.status(404).json({
          message : "Employee not found"
        });
      }       
       return res.status(200).json({
        message : "Employee fetched successfully",
        employee
      });
    }catch(error){
      console.log(error);
      return res.status(500).json({
        message : "Internal Server Error"
      });
    }
};

const createEmployee = async(req,res) => {
    try{
       const {name,email,phone,salary,designation,department,joiningDate} = req.body;
       if(!name || !email || !phone || !designation || !department || !joiningDate){
         return res.status(400).json({
          message : "All fields are required"
         });
       }
       const existingEmail = await Employee.findOne({email});
       if(existingEmail){
         return res.status(409).json({
          message : "Email already exists"
         });
       }
       const newEmployee = await Employee.create({name,email,phone,salary,designation,department,joiningDate});
       return res.status(201).json({
         message : "Employee created successfully",
         newEmployee
       });
    }catch(error){
      console.log(error);
      return res.status(500).json({
        message : "Internal Server Error"
      });
    }
};

module.exports = {getEmployees,getEmployeesById,createEmployee};