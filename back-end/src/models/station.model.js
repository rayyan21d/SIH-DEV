import mongoose from "mongoose";
import { Train } from "./train.model.js";

const stationSchema = new mongoose.Schema({
    stationName: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        trim: true
    },

    stationCode: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
        index: true,
        trim: true
    },

    trains: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Train"
        }
    ],

    /*
        driverAvailabilty: 
    */

}, {timestamps: true});

export const Station = mongoose.model("Station", stationSchema);