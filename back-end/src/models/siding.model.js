import mongoose from "mongoose";




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

    zone: {
        type: String,
        required: true
    },

    division: {
        type: String,
        required: true
    },

    contactPersonName: {
        type: String,
    },

    contactPersonContact: {
        type: String,
    },

    latitude: {
        type: String,
        required: true
    },

    longitude: {
        type: String,
        required: true
    }
    
}, {timestamps: true});

export const Siding = mongoose.model("Siding", sidingSchema);