import mysql2 from "mysql2/promise"

const mySqlPool = mysql2.createPool({
     host : "localhost",
     user : "root",
     password : 'ankushsirswal1423',
     database : "employee_db"
});


export {mySqlPool}