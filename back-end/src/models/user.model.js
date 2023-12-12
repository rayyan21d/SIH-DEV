import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    userType: {
        type: String,
        enum: {
            values: ["siding, station, admin"]
        },
        required: true
    },

    username: {
        type: String,
        uppercase: true,
        required: true
    },

    hashedPassword: {
        type: String,
        required: [true, "Password is required"]
    }
}, {timestamps: true});

// .pre
userSchema.pre("save", async function(next) {
    if(this.isModified("hashedPassowrd")) {
        this.hashedPassword= await bcrypt.hash(this.hashedPassword, 10);
        next();
    } else {
        next();
    }
});

// Custom MiddleWares is created by schemaName.methods.<methName> = function() {
//}
// Nott: Dont use arrow functions since the meth needs 'this' which isnt available in arrow funcs
userSchema.methods.passwordChecker = async function(hashedPassowrdRecvd) {
    return await bcrypt.compare(hashedPassowrdRecvd, this.hashedPassowrd);
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this._id,
            username: this.username,
            userType: this.userType
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);