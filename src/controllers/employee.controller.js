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

