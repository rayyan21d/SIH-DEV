import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Station } from "../models/station.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const correctStation = asyncHandler(async (req, res, next) => {
    const askedStation = req.params.id;
    if(!(askedStation === req.user.username)) {
        return res.status(400).json(
            new ApiResponse(
                400,
                {},
                `You do not have access to Station ${askedStation}'s Dashboard`
            )
        )
    }

    next();
});

export { correctStation };