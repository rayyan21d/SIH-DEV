import mongoose from "mongoose";



const ExpectedCoal = mongoose.model("ExpectedCoal", expectedCoalSchema);

const sidingSchema = new mongoose.Schema({
    // zone, division

    
    sidingName: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        trim: true
    },

    sidingCode: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        index: true,
        trim: true
    },

    coalToBeCollected: {

    },

    timeOfCollection: {
        
    },

    trainAssigned: {
        type: Boolean,
        default: false
        // and which train
    },

    lat: {

    },

    long: {

    }
    
}, {timestamps: true});

export const Siding = mongoose.model("Siding", sidingSchema);