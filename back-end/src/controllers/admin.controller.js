import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Station } from "../models/station.model.js";
import { User } from "../models/user.model.js";
import { addUser } from "./user.controller.js";




const registerAdmin = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;
    // Validate if all data is sent
    if(
        [
            username,
            password
        ].some((field) => {
            return field?.trim() === "";
        })
    ) {
        res.status(400).json(
            new ApiResponse(400, {}, "All fields not given")
        )
        throw new ApiError(400, "All fields not given");
    }
    // Check if admin already exists
    const existedUser = await User.findOne({ username });
    if(existedUser) {
        res.status(409).json(
            new ApiResponse(409, {}, "Admin Already exists in User Table")
        )
        throw new ApiError(409, "Admin Already exists in User Table");
    }
    // Create entry in DB

    const userCreated = await User.create(
        {
            username: username.toUpperCase(),
            password,
            userType: "admin"
        }
    )
    if(await User.findById(userCreated._id)) {
        res.status(201).json(
            new ApiResponse(200, userCreated, "Admin Added Successfully")
        )
    }else {
        res.status(201).json(
            new ApiResponse(200, userCreated, "Couldnt be Added")
        )
        throw new ApiError(401, "Problem While Adding Admin");
    }
})

const registerSiding = asyncHandler(async (req, res) => {
    // get data from user
    const {sidingCode, sidingName, password, zone, division, contactPersonName, contactPersonContact, latitude, longitude} = req.body;
    console.log("sidingCode", sidingCode, "sidingName", sidingName, "password", password);

    // Validate if all data is sent
    if(
        [
            sidingCode,
            sidingName,
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
    } else {
        console.log("Got all feilds");
    }
    
    // Check if station already exists

    const existedSiding = await Siding.findOne({ sidingCode });
    const existedUser = await User.findOne({ username: sidingCode });
    if(existedSiding) {
        throw new ApiError(409, "Siding Already exists in Siding Table");
    }

    if(existedUser) {
        throw new ApiError(409, "Siding Already exists in Siding Table");
    }
    // Create entry in DB
    const sidingCreated = await Siding.create(
        {
            sidingCode: sidingCode.toUpperCase(),
            sidingName: sidingName.toLowerCase(),
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
            username: sidingCode.toUpperCase(),
            password,
            userType: "siding"
        }
    )
    

    if(await Siding.findById(sidingCreated._id) && await User.findById(userCreated._id)) {
        return res.status(201).json(
            new ApiResponse(200, sidingCreated, "Siding Added Successfully")
        )
    }else {
        throw new ApiError(401, "Problem While Adding Siding");
    }
});

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

export { registerAdmin, registerSiding, registerStation };