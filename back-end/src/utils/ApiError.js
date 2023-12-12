class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;
    }
}

const errorResponse = (req, res, err) => {
    res.status(err.statusCode).json({
        message: err.message
    })
}

export {ApiError, errorResponse};