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
            .status(error.statusCode)
            .json(ErrorResponse)

    }
}

const getAirplanes = async (req, res) => {
    try {
        const response = await airplaneService.getAirplanes();
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)

    }
}

const getAirplane = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await airplaneService.getAirplane(id);
        SuccessResponse.data = response;
        return res
            .status(StatusCodes.OK)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)

    }
}

const deleteAirplane = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await airplaneService.deleteAirplane(id);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}

const updateAirplane = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await airplaneService.updateAirplane(id, req.body);
        console.log(response);
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse)
    }
}



module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    deleteAirplane,
    updateAirplane
}