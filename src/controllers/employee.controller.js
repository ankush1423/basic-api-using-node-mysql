import { mySqlPool } from "../db/database.js";

export const getAllEmployees = async (req,res) => {
    try
    {
        const [rows] = await mySqlPool.query("SELECT * FROM employees")
        res.send(rows)
    }
    catch(err)
    {
        console.log("ERROR WHILE GETTING THE DATA ",err)
    }
}

export const getEmployeeById = async(req,res) =>{
      try 
      { 
        const {employeeId} = req.params

        if(!employeeId)
        {
           throw new Error("error while getting the id")
        }
  
        const [record] = await mySqlPool.query(`SELECT * FROM employees WHERE id = ?`,[employeeId])

        if(record.length == 0)
        {
            return res.send("there is no employee with this id")
        }
        return res.json(record)
      } 
      catch (error)
      {
         console.log("ERROR WHILE GETTING THE EMPLOYEE DATA ",error)
      }
}

export const deleteEmployeeData = async(req,res) => {
     try
     {
        const {employeeId} = req.params

        if(!employeeId)
        {
            throw new Error("ERROR WHILE GETTING THE EMPLOYEE ID")
        }

        const [record] = await mySqlPool.query(`DELETE FROM employees WHERE id = ?`,[employeeId])
        
        if(record.affectedRows == 0)
        {
            return res.send("there is no employee with this id")
        }

        return res.send("employee deleted SuccessFully")
     }
     catch(err)
     {
        console.log("ERROR WHILE DELETING THE EMPLOYEE DATA : ",err)
     }
}

export const createEmployee = async(req,res) => {
    try
    {  
       const {name , employee_code , salary} = req.body
       const _id = 0;

       if(!name || !employee_code || !salary)
       {
          return res.send("all the informations are required")
       }

       await mySqlPool.query(`CALL update_employee(?,?,?,?)`,[_id,name,employee_code,salary])

       return res.send("EMPLOYEE CREATED SUCCESSFULLY")
    }
    catch(err)
    {
        console.log("ERROR WHILE UPDATE THE EMPLOYEE ",err)
    }
}

export const updateEmployee = async(req,res) => {
    try
    {
        
        const {employeeId} = req.params
        const {name,employee_code,salary} = req.body

        if(!employeeId || !name || !employee_code || !salary)
        {
            return res.send("all feilds are mandatry")
        }

        await mySqlPool.query("CALL update_employee(?,?,?,?) ",[employeeId,name,employee_code,salary])

        return res.status(200).send("EMPLOYEE DATA UPDATED SUCCESSFULLLY")

    }
    catch(err)
    {
        console.log("ERROR WHILE UPDATING THE EMPLOYEE  ",err)
    }
}