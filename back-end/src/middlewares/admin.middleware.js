import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const isAdmin = asyncHandler(async (req, res, next) => {
    console.log(req.user);
    if(!(req.user.userType === "admin")) {
        return res.status(402).json(
            new ApiResponse(
                402,
                {},
                "User does not have admin privilage"
            )
        )
    }
    next();
})

export { isAdmin };