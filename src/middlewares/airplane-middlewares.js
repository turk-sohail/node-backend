const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const { AppError } = require("../utils");

const validateCreateRequest = (req, res, next) => {
    if (!req.body.modelNumber) {
        ErrorResponse.message = "There was an error while creating Airplane object";
        ErrorResponse.error = new AppError(["Model number not present in incomming request"], StatusCodes.BAD_REQUEST);

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}


module.exports = {
    validateCreateRequest
}