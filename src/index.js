import dotenv from "dotenv" //used through ecperimental feature check in package.json 
dotenv.config({path: './.env'})
import mongodbConnect from "./db/index.js";

import express from "express"
const app = express();

mongodbConnect()



















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


