import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Siding } from "../models/siding.model.js";
import { Order } from "../models/orders.model.js";

const makeRequest = asyncHandler(async (req, res) => {
    const sidingCode = req.user.username;
    const {stationCode, coalToBeCollected, requestedTime, remarks} = req.body;
    if(
        ([
            sidingCode,
            stationCode,
            // requestedTime
        ].some((field) => {
            return field.trim() === ""
        }))

        || (coalToBeCollected === null || coalToBeCollected ===undefined)
    ) {
        res.status(400).json(
            new ApiResponse(
                400,
                {},
                "All Fields Not Given"
            )
        )
        throw new ApiError(400, "All fields not given");
    }

    const orderCreated = await Order.create(
        {
            sidingCode,
            stationCode,
            coalToBeCollected,
            remarks,
            requestedTime
        }
    )

    // CHECK IF ORDER IS PLACED OR NOT

    if(await Order.findById(orderCreated._id)) {
        res.status(201).json(
            new ApiResponse(200, orderCreated, "Order Placed Successfully")
        )
    }else {
        res.status(201).json(
            new ApiResponse(200, orderCreatedCreated, "Problem while placing order")
        )
        throw new ApiError(401, "Problem while placing order");
    }
})



const updateRequest = asyncHandler(async (req, res, next) => {
    let order = await Order.findById(req.params.requestID);
    if(!(order)) {
        res.status(400).json(
            new ApiResponse(
                400,
                {},
                `No Such Order Found for ${req.user.username}`
            )
        )
    }

    if(!(req.body.remarks.length === 0)) {
        for(let i=0; i<req.body.remarks.length; i++) {
            order.remarks.push(req.body.remarks[i]);
        }
        req.body.remarks = order.remarks
    }
    const updatedOrder = await Order.updateOne({_id: req.params.requestID}, req.body, {new: true});
    if(!(updatedOrder.acknowledged)) {
        res.status(500).json(
            new ApiResponse(
                500,
                {},
                `Could not update order due to internal error`
            )
        )
    }

    order = await Order.findById(req.params.requestID);
    return res.status(200).json(
        new ApiResponse(
            200,
            {
                order
            },
            "Order Updated Successfully"    
        )
    )
})



export { makeRequest, updateRequest };
