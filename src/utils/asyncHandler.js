const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export { asyncHandler };



//----------------------------------------------------------------------------------------------------------------------
//function wrapper create /// try catch type
//const asyncHandler = () => {} //create a async fx
//const asyncHandler = (fn) => {async () => {}} // convert above in async handler




// const asyncHandler = (fn) => async (req, res, next) => {
//      try{

//        await functin(req,res,next)

//      }catch(error){
//         res.status(error.code || 500).json({
//             success : false,
//             message: error.message
//         })
//      }
// }