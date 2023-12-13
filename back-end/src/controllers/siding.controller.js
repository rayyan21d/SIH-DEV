import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Siding } from "../models/siding.model.js";
import { User } from "../models/user.model.js";



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
        throw new ApiError(401, "Problem While Adding Siding")
    }
});

export { registerSiding };