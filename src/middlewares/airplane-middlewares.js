const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");

const validateCreateRequest = (req, res, next) => {
    if (!req.body.modelNumber) {
        ErrorResponse.message = "There was an error while creating Airplane object";
        ErrorResponse.error = { explaination: "Model Number is Not Present or Not in Correct Form" };

        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}


module.exports = {
    validateCreateRequest
}