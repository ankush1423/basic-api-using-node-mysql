import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
     origin : process.env.CORS,
     credentials : true
}))

app.use(express.json({limit : "16kb"}));
app.use(express.urlencoded({extended : true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// ROUTES OF THE APP
import employeeRoute from "./controllers/employee.controller.js"

app.use('/api/v1/employees',employeeRoute)

export {app}