import mongoose from "mongoose";
import { Station } from "./station.model.js";

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

    carryingCapacity: {
        type: Number,
        required: true
    },

    avgTravellingCost: {
        type: Number,
        required: true
    },

    balanceRemaining: {
        type: Number
    },

    status: {
        type: String,
        default: false,
    },

    ownedBy: {
        type: mongoose.Types.ObjectId,
        ref: "Station"
    },

    currentlyAt: {
        type: mongoose.Types.ObjectId,
        ref: "Station"
    }

}, {timestamps: true});


export const Train = mongoose.model("Train", trainSchema);