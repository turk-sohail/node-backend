const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes")
const { SuccessResponse, ErrorResponse } = require("../utils/common");

const airplaneService = new AirplaneService();


const createAirplane = async (req, res) => {
    try {
        const response = await airplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse)

    }
}



module.exports = {
    createAirplane
}