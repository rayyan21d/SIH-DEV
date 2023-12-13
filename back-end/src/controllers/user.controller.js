import { asyncHandler } from "../utils/asyncHandler.js";
import { registerSiding } from "./siding.controller.js";
import { registerStation } from "./station.controller.js";



const registerUser = asyncHandler(async (req, res) => {
    const {userType} = req.body;
    if(userType === "siding") {
        await registerSiding(req,  res);
    } else {
        await registerStation(req, res);
    }
});



export {registerUser};