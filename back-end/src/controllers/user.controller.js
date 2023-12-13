import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";

const addUser = asyncHandler(async (userType, req, res) => {
    
    const {username, password} = req.body;

    const userCreated = await User.create({
        username: username.toUpperCase(),
        userType: userType,
        password
    })

    return userCreated;
})


export { addUser };