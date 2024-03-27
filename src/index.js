//import dotenv from "dotenv"
import connectDB  from "./db/index.js";
import { app } from "./app.js";

/*Since Node v20.6.0, node is supporting env file without any 3rd party library (dotenv). You have to just add --env-file in your script tag in package.json. So, your script tag will look like:

  "scripts": {
    "start": "node --env-file=.env src/index.js",
    "dev": "nodemon --env-file=.env src/index.js"
  }
*/

// dotenv.config({
//     path: './env'
// })


connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
  })
})

.catch((err) => {
  console.log("MONGO db connection failed !!! " , err);
})