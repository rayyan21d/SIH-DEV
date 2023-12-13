import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import  jwt  from "jsonwebtoken";

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if(err) {
                console.log(err);
            } else {
                console.log(decodedToken);
            }
        })
    }else {
        
    }
}