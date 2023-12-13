import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    userType: {
        type: String,
        enum: {
            values: ["siding", "station", "admin"]
        },
        required: true
    },

    username: {
        type: String,
        uppercase: true,
        required: true
    },

    password: {
        type: String,
        required: [true, "Password is required"]
    }
}, {timestamps: true});

// .pre
userSchema.pre("save", async function(next) {
    if(this.isModified("password")) {

        this.password = await bcrypt.hash(this.password, 10);
        next();
    } else {
        return next();
    }
});

// Custom MiddleWares is created by schemaName.methods.<methName> = function() {
//}
// Nott: Dont use arrow functions since the meth needs 'this' which isnt available in arrow funcs


userSchema.methods.passwordChecker = async function(passwordReceived) {
    return await bcrypt.compare(passwordReceived, this.password);
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

// userSchema.methods.generateRefreshToken = function() {
//     return jwt.sign(
//         {
//             _id: this._id,
//         },
//         process.env.REFRESH_TOKEN_SECRET,
//         {
//             expiresIn: process.env.REFRESH_TOKEN_EXPIRY
//         }
//     )
// }



export const User = mongoose.model("User", userSchema);