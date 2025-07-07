import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();




app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true, limit : "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())


//routes import

import userRoute from "./routes/user.routes.js";


//router decleration

app.use("/api/v1/user", userRoute)

// Basic test route
app.get("/", (req, res) => {
    res.send("API is running");
});
//http://localhost:5000/api/v1/user/register
export{ app }
