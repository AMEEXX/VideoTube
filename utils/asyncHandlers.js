// const asynchandlers = (fn) => async () => {
//     try {
//         await fn(req , res , next)
        
//     } catch (error) {
//         resizeBy.status(error.code || 500).json({
//             succes : false,
//             message : error.message
//         })
        
//     }
// }


// with the use or promises 
const asyncHandlers = (requesHandler) =>{
    (req, res, next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }

}

export {asynchandlers}