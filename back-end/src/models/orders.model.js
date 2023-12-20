import mongoose from "mongoose";

const remarksSchema = new mongoose.Schema({
            title: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true
            },
            delayTime: {
                type: Date,
            }
        
}, {timestamps: true, _id: false})
const orderSchema = new mongoose.Schema({
    stationCode: {
        type: String,
        required: true
    },

    sidingCode: {
        type: String,
        required: true
    },

    coalToBeCollected: {
        type: Number,
        required: true
    },

    requestedTime: {
        type: Date
    },

    status: {
        type: String,
        enum: ["fulfilled", "in-transit", "new"],
        default: "new"
    },

    remarks: [remarksSchema]
}, {timestamps: true});


const Order = mongoose.model("Order", orderSchema);
export { Order };