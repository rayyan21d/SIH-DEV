import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import {app} from "./app.js"
dotenv.config({
    path: './.env'
})
let selectedPort

connectDB()
.then(() => {
    app.listen(selectedPort = process.env.PORT || 4000, () => {
        console.log(`Server is listening at port ${selectedPort}`)
    });
})
.catch((error) => {
    console.log("MongoDB connection error!!!", error)
});