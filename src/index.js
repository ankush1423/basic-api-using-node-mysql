import { app } from "./app";
import { mySqlPool } from "./db/database";




mySqlPool.query("SELECT 1")
         .then(() => {
                console.log("db Connection Successed")
                app.listen(process.env.PORT,() => console.log("SERVER LISTEN AT POST ",process.env.PORT))
          })
         .catch((err) => {
                console.log("CONNECTION FAILED ",err)
         })
