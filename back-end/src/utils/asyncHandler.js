// This function basically executes the requestHandler in an asynchronous way,
// Each request is an async function which returns a promise to be resolved or caught,
// instead of writing this promise resolve every time something containing req, res is to be executed
// just write asyncHandler(theRequestFunction);

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((err) => console.log(err));
    }
}

export { asyncHandler };