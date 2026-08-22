import {useState,useEffect} from "react";
import {getEmployees} from "../services/employeeService";

function EmployeeList(){
   const [employees,setEmployees] = useState([]);
   const [loading,setLoading] = useState(true);
   const [error,setError] = useState("");

   useEffect(() => {        
        const fetchEmployees = async() => {
          try{            
            const data = await getEmployees();
            setEmployees(data.employees);
          }catch(e){
            console.log("Error fetching employees",e);
            setError("Unable to fetch employees");
          }finally{            
            setLoading(false);
          }
        }
        fetchEmployees();
   },[]);

   if(loading){
    return(
        <h3>Loading Employees...</h3>
    );
   }
   if(error){
    return(
        <h3> {error} </h3>
    );
   }
   return(
        <div>
        <h1> Employee Management System </h1>
        <table border="1" cellPadding="10">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Salary</th>
                    <th>Designation</th>
                    <th>Department</th>
                    <th>Joining Date</th>
                </tr>
            </thead>
            <tbody>
                    {employees.map((employee) => (
                        <tr key = {employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.department}</td>
                            <td>{employee.joiningDate}</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>
   );
}
export default EmployeeList;