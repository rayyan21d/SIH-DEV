import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { Station } from "../models/station.model.js";
import { Siding } from "../models/siding.model.js";
import { ApiError } from "../utils/ApiError.js";



const loginUser = asyncHandler(async (req, res, next) => {
    // Check if user already logged in, if yes redirect to apprpriate page
    // Get Data from request
    const { username, password, userType } = req.body;
    // Check if User Exists or not
    const userFound = await User.findOne({ username })
    if(!userFound) {
        return res.status(400).json(new ApiResponse(
            400,
            {},
            "No such user exists"
        ))
        // Send Appropriate Response
    } else if(userType === "siding") {
        if(!await Siding.findOne({ sidingCode: username })) {
            return res.status(400).json(new ApiResponse(
                400,
                {},
                "No such Siding exists"
            ))
        }
    } else if(userType === "station") {
        if(!await Station.findOne({ stationCode: username })) {
            return res.status(400).json(new ApiResponse(
                400,
                {},
                "No such Station exists"
            ))
        }
    }
    console.log(userFound);
    // Check if password is Correct or Not
    const passwordCorrect = await userFound.passwordChecker(password);
    if(!passwordCorrect) {
        res.status(400).json({
            message: "incorrect password"
        })
        return;
    }
    console.log("Password is correct");

    const accessToken = await userFound.generateAccessToken();
    // Save this token as a cookie in browser via front end app
    // And send this jwt as a cookie in each request route after the login happens
    const options = {
        httpOnly: true,
        secure: true
    }
    res.cookie("accessToken", accessToken, options);
    res.status(200).json(
        new ApiResponse(
            200,
            {
                user: username 
            },
            "User Logged in Successfully"
        )
    );
});

export { loginUser };