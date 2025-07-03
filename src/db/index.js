import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const mongodbConnect = async() => {
    try{
    const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected !!!!! DB Host:  ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("Mongo Db connection failed: ", error)
        process.exit(1)//read about this
    }
}

export default mongodbConnect