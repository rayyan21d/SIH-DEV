import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { Siding } from "../models/siding.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const correctSiding = asyncHandler(async (req, res, next) => {
    const askedSiding = req.params.sidingCode;
    if(!(askedSiding === req.user.username)) {
        return res.status(400).json(
            new ApiResponse(
                400,
                {},
                `You do not have access to Siding ${askedSiding}'s Dashboard`
            )
        )
    }

    next();
});

export { correctSiding };