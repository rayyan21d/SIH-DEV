import { asyncHandler } from "../utils/asyncHandler.js"

const registerStation = asyncHandler(async (req, res) => {
    // get data from front end
   
    const {username: stationCode, stayionName, hashedPassword} = req.body;
    console.log("Station is:", stationCode, hashedPassword);
 
    // Validate if all required data is sent
 
     if([
         stationCode, stationName, hashedPassword
     ].some((field) => { 
         return field?.trim() === "";
     } 
     )) {
         throw new ApiError(400, "All fields not given")
         
     } else {
         console.log("All fields given")
     }
 
    // check if an admin is making this request
 
 
    // check if station already exist
 
     const existingStation = await Station.findOne({stationCode});
 
     if(existingStation) {
         res.status(401).json({
             message: "Station already exists"
         })
     }
     
     // create siding object and enter in DB
 
     const stationCreated = await Station.create({
         stationCode: stationCode.toUpperCase(),
         stationName,
         hashedPassword
     });
 
    // remove password and refresh token from response?
 
     if(await Station.findById(stationCreated._id)) {
         res.status(200).json({
             message: "Station Added Successfully"
         })
     } else {
         res.status(402).json({
             message: "Station Couldnt be "
         })
     }

     // check if entry is successful in DB
     // return response
 
})


export { registerStation };