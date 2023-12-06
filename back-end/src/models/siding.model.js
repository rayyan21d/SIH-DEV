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

    coalCollected: {
        type: Number,
        default: 0,
    },

    expectedCoalData: {
        type: mongoose.Types.ObjectID,
        ref: "ExpectedCoal"
    },

    trainAssigned: {
        type: Boolean,
        default: false
    }


}, {timestamps: true});

export const Siding = mongoose.model("Siding", sidingSchema);