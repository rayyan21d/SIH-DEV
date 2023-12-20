import mongoose from "mongoose";

const stationSchema = new mongoose.Schema({
    stationName: {
        type: String,
        // required: true,
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

    // trainsInStation: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Train"
    //     }
    // ],

    // trainsOwned: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Train"
    //     }
    // ],

    zone: {
        type: String,
        required: true
    },

    district: {
        type: String,
        required: true
    },

    contactPersonName: {
        type: String,
    },

    contactPersonContact: {
        type: String,
    },

    // latitude: {
    //     type: Number,
    //     required: true
    // },

    // longitude: {
    //     type: Number,
    //     required: true
    // }

}, {timestamps: true});

export const Station = mongoose.model("Station", stationSchema);