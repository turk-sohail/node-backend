const { AirPlaneRepostory } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");

class AirplaneService {

    constructor() {
        this.AirplaneRepo = new AirPlaneRepostory();
    }

    async createAirplane(data) {
        try {

            const airplane = await this.AirplaneRepo.create(data);
            return airplane;
        } catch (error) {
            if (error.name === "TypeError") {
                throw new AppError("Cannot create new Airplane Object", StatusCodes.INTERNAL_SERVER_ERROR);
            }

            throw error;

        }

    }

}







module.exports = AirplaneService;