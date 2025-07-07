import dotenv from "dotenv" //used through ecperimental feature check in package.json 
dotenv.config({path: './.env'})
import mongodbConnect from "./db/index.js";
import { app } from "./app.js";


mongodbConnect()
.then(() =>{
  app.listen(process.env.PORT || 8000, ()=>{console.log(`server is running on port: ${process.env.PORT}`)})
})
.catch((err)=>{
    console.log("mongoDB connection failed!!!!!!!", err)
}
)



















/*
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error)
            throw error
        })
        console.log("connected to mangodb")
        app.listen(process.env.PORT, () => {
            console.log(`server is running on port : ${process.env.PORT}`)

        })


    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }

})()
    */


