import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(  (req,res) =>{
   
    console.log("register rrouter is hit")
    res.status(200).json({
        message : "OK"
        
        
    })
})





export {registerUser}