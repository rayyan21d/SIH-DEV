import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Station } from "../models/station.model.js";
import { Siding } from "../models/siding.model.js";



const loginUser = asyncHandler(async (req, res, next) => {
    // Check if user already logged in, if yes redirect to apprpriate page

    // Get Data from request
    const { username, password, userType } = req.body;

    // Check if User Exists or not

    const userFound = await User.findOne({ username })
    if (!userFound) {
        console.log("No such User Exists");
        // Send Appropriate Response
        return res.status(400);
    } else if (userType === "siding") {
        if (!await Siding.findOne({ sidingCode: username })) {
            console.log("No such  Siding Exists");
            // Send Response
            return res.status(400);
        }
    } else if (userType === "station") {
        if (!await Station.findOne({ stationCode: username })) {
            console.log("No such Station Exists");
        }
    }
    console.log(userFound);
    // Check if password is Correct or Not
    const passwordValid = await userFound.passwordChecker(password);
    if (!passwordValid) {
        // the below code can be edite
        res.status(400).json({
            "message": "incorrect password"
        })

        return;

    }

    console.log("Password is correct");

    const accessToken = userFound.generateAccessToken();


    // Save this token as a cookie in browser via front end app
    // And send this jwt as a cookie in each request route after the login happens
    res.cookie("jwt", accessToken, { httpOnly: true });
    res.status(201).json({
        message: "Log in Successful",
        username: username,
        jwt: accessToken
    });

});

export { loginUser };