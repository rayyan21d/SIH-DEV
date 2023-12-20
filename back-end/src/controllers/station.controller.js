import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Station } from "../models/station.model.js";
import { User } from "../models/user.model.js";


const addTrain = asyncHandler(async (req, res) => {

    console.log(req.params.id);
    const stationCode = req.user?.username;
    const { trainID, currentlyAt, carryingCapacity, lastMaintenance, balanceRemaining } = req.body;

})

export { addTrain };