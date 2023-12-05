import mongoose from "mongoose";
import { DB_NAME_TEST } from "../constants.js";

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME_TEST}`);
       console.log(`\n MongoDB Connected! DB HOST ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Conncection Error: ", error);
        process.exit(1);
    }
};

export default connectDB