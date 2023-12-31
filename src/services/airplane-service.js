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

    async getAirplanes() {
        try {
            const airplanes = await this.AirplaneRepo.getAll();
            return airplanes;
        } catch (error) {
            throw new AppError("cannot fetch data of all ariplanes", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async getAirplane(id) {
        try {
            const airplane = await this.AirplaneRepo.get(id);
            return airplane;
        } catch (error) {
            throw new AppError("cannot fetch data of all ariplanes", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteAirplane(id) {
        try {
            const airplane = await this.AirplaneRepo.destroy(id);
        } catch (error) {
            throw new AppError("cannot delete the ariplane", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async updateAirplane(id, data) {
        try {
            const airplane = await this.AirplaneRepo.updateOne(id, data);
            return airplane;
        } catch (error) {
            throw new AppError("cannot delete the ariplane", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

}







module.exports = AirplaneService;