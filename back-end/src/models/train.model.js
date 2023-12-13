import mongoose from "mongoose";

const trainSchema = new mongoose.Schema({
    trainNumber: {
        type: Number,
        required: true,
        index: true,

    },

    noOfWagons: {
        min: [7, "Wagons cant be < 7"],
        max: [15, "Wagongs cant be > 15"],
        type: Number,
    },

    carryingCapicityPerWagon: {
        type: Number,
        
    },

    avgTravellingCost: {

    },

    balanceRemaining: {
        // how many kms
        // how many days (only for display)
    },

    isAssigned: {
        type: Boolean,
        default: false,
        // and to which siding
    }



}, {timestamps: true});


export const Train = mongoose.model("Train", trainSchema);