import mongoose, { mongo } from "mongoose";

const expectedCoalSchema = new mongoose.Schema({
    expectedTime: {
        type: Date,
    },
    expectedWeight: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const ExpectedCoal = mongoose.model("ExpectedCoal", expectedCoalSchema);

const sidingSchema = new mongoose.Schema({

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

    coalCollected: {
        type: Number,
        default: 0,
    },

    trainAssigned: {
        type: Boolean,
        default: false
    },

    expectedCoalData: {
        type: mongoose.Types.ObjectID,
        ref: "ExpectedCoal"
    }

}, {timestamps: true});

export const Siding = mongoose.model("Siding", sidingSchema);