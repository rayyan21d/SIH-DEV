import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Station } from "../models/station.model.js";
import { User } from "../models/user.model.js";
const registerStation = asyncHandler(async (req, res) => {
    // get data from user
    const {stationCode, stationName, password, zone, division, contactPersonName, contactPersonContact, latitude, longitude} = req.body;
    console.log("stationCode", stationCode, "stationName", stationName, "password", password);

    // Validate if all data is sent
    if(
        [
            stationCode,
            stationName,
            password,
            zone,
            division,
            contactPersonName,
            contactPersonContact,
            latitude,
            longitude
        ].some((field) => {
            return field?.trim() === "";
        })
    ) {
        throw new ApiError(400, "All fields not given");
    } 
    
    // Check if station already exists

    const existedStation = await Station.findOne({ stationCode });
    const existedUser = await User.findOne({ username: stationCode });
    if(existedStation) {
        throw new ApiError(409, "Station Already exists in Station Table");

    }
    if(existedUser) {
        throw new ApiError(409, "Station Already exists in Station Table");
    }
    // Create entry in DB
    const stationCreated = await Station.create(
        {
            stationCode: stationCode.toUpperCase(),
            stationName: stationName.toLowerCase(),
            password,
            zone,
            division,
            contactPersonName,
            contactPersonContact,
            latitude,
            longitude
        }
    )

    const userCreated = await User.create(
        {
            username: stationCode.toUpperCase(),
            password,
            userType: "station"
        }
    )

    if(await Station.findById(stationCreated._id) && await User.findById(userCreated._id)) {
        res.status(200).json({
            message: "Station Added Successfully"
        })
    }else {
        res.status(400).json({
            message: "Station Couldnt be added"
        })
    }
});


export { registerStation };