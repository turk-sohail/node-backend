const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes")
const { SuccessResponse, ErrorResponse } = require("../utils/common");

const cityService = new CityService();

const createCity = async (req, res) => {
    console.log(req)
    try {
        const response = await cityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)

    }
}


module.exports = {
    createCity
}