import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError, errorResponse } from "../utils/ApiError.js"
import { Siding } from "../models/siding.model.js"




const registerSiding = asyncHandler(async (req, res) => {
   // get data from front end
   
   const {username: sidingCode, sidingName, hashedPassword} = req.body;
   console.log("siding is:", sidingCode, hashedPassword);

   // Validate if all required data is sent

    if([
        sidingCode, sidingName, hashedPassword
    ].some((field) => { 
        return field?.trim() === "";
    } 
    )) {
        throw new ApiError(400, "All fields not given")
        
    } else {
        console.log("All fields given")
    }

   // check if an admin is making this request

    



   // check if siding already exist

    const existingSiding = await Siding.findOne({sidingCode});

    if(existingSiding) {
        res.status(401).json({
            message: "Siding already exists"
        })
    }
    
    // create siding object and enter in DB

    const sidingCreated = await Siding.create({
        sidingCode: sidingCode.toUpperCase(),
        sidingName,
        hashedPassword
    });

   // remove password and refresh token from response?

    if(await Siding.findById(sidingCreated._id)) {
        res.status(200).json({
            message: "Siding Added Successfully"
        })
    } else {
        res.status(402).json({
            message: "Siding Couldnt be "
        })
    }

   // check if entry is successful in DB
   // return response
});

export {registerSiding};