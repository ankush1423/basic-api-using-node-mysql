import express from "express"
import { 
       getAllEmployees,
       getEmployeeById, 
       deleteEmployeeData,
       createEmployee,
       updateEmployee
       } from "../controllers/employee.controller.js";


const router = express.Router()


router.get("/",getAllEmployees)

router.route("/:employeeId").get(getEmployeeById).delete(deleteEmployeeData).patch(updateEmployee)

router.route("/").post(createEmployee)


export default router;