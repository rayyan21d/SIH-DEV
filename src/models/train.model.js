import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
    
}, {timestamps: true});


export const Train = mongoose.model("Train", trainSchema);