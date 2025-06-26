import dotenv from "dotenv"



import connectDB from "./db/index.js"
dotenv.config()


connectDB()

/*
import express from "express"
const app = express()
( async ()=>{
    try {
        mongoose.connect(`${process.env.MONDO_URL}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("error", error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`the applicaiton is listening on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log("connection error while connecting the MongoDB",error)
        throw error
        
        
    }


})()
*/