import express from "express"
import { 
       getAllEmployees,
       getEmployeeById, 
       deleteEmployeeData,

       } from "../controllers/employee.controller.js";


const router = express.Router()


router.get("/",getAllEmployees)

router.route("/:employeeId").get(getEmployeeById).delete(deleteEmployeeData)

export default router;