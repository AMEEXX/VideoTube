import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"




const connectDB = async ()=>{
    try {
        const connectionInstances = await mongoose.connect(`${process.env.MONDO_URL}/${DB_NAME}`)
        console.log(`The MOngoDB is connectedd HURayyyyyyy!!!! At the host ${connectionInstances.connection.host}`)
        
    } catch (error) {
        console.log("There is some error in the MongoDBhhhhhhhh connection",error)
        process.exit(1)
        
    }
}
export default connectDB