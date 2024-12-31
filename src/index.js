import { app } from "./app.js";
import { mySqlPool } from "./db/database.js";



mySqlPool.query("SELECT 1")
         .then(() => {
                console.log("db Connection Successed")
                app.listen(process.env.PORT,() => console.log("SERVER LISTEN AT POST ",process.env.PORT))
          })
         .catch((err) => {
                console.log("CONNECTION FAILED ",err)
         })
