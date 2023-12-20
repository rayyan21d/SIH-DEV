import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import  jwt  from "jsonwebtoken";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const verifyToken = asyncHandler(async (req, res, next) => {
    const accessToken = req.cookies?.accessToken
    if(!accessToken) {
        return res.status(400).json(
            new ApiResponse(
                400,
                {},
                "Not Logged in"
            )
        )
    }
    const decodedToken = await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select("-password");
    console.log(user);
    if(!user) {
        return res.status(401).json(
            new ApiResponse(
                400,
                {},
                "Invalid Token"
            )
        )
    }
    req.user = user;
    next();
})

export { verifyToken };