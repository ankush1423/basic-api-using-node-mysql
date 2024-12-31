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