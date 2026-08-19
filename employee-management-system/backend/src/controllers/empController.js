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
       if(salary < 0 || phone.length != 10){
         return res.status(400).json({
          message : "Invalid input"
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

const updateEmployee = async(req,res) => {
      try{
          const {id} = req.params;
          const {name,email,phone,salary,designation,department,joiningDate} = req.body;
          const employee = await Employee.findById(id);
          if(employee){
              if(name !== undefined) employee.name = name;
              if(email !== undefined) employee.email = email;
              if(phone !== undefined) employee.phone = phone;
              if(salary !== undefined) employee.salary = salary;
              if(designation !== undefined) employee.designation = designation;
              if(department !== undefined) employee.department = department;
              if(joiningDate !== undefined) employee.joiningDate = joiningDate;
              const updatedEmployee = await employee.save();
              return res.status(200).json({
                message : "Employee updated successfully",
                updatedEmployee
              });
          }else{
            return res.status(404).json({
               message : "Employee does not exist"
            });
          }
      }catch(error){
         console.log(error);
         return res.status(500).json({
           message : "Internal Server Error"
         });
      }
};

const deleteEmployee = async(req,res) => {
    try{
        const {id} = req.params;
        const employee = await Employee.findByIdAndDelete(id);
        if(employee){
          return res.status(200).json({
            message : "Employee deleted successfully"
          });
        }
        return res.status(404).json({
          message : "Employee not found"
        });
    }catch(error){
      console.log(error);
      return res.status(500).json({
        message : "Internal Server Error"
      });
    }
};

module.exports = {getEmployees,getEmployeesById,createEmployee,updateEmployee,deleteEmployee};