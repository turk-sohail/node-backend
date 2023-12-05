const { CityRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");


class CityService {

    constructor() {
        this.cityRepo = new CityRepository();
    }

    async createCity(data) {
        try {

            const city = await this.cityRepo.create(data);
            return city;
        } catch (error) {
            if (error.name === "TypeError") {
                throw new AppError("Cannot create new city Object", StatusCodes.INTERNAL_SERVER_ERROR);
            }

            throw error;

        }

    }

    async getCities() {
        try {
            const cities = await this.cityRepo.getAll();
            return cities;
        } catch (error) {
            throw new AppError("cannot fetch data of all cities", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async getCity(id) {
        try {
            const city = await this.cityRepo.get(id);
            return city;
        } catch (error) {
            throw new AppError("cannot fetch data of all city", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteCity(id) {
        try {
            const city = await this.cityRepo.destroy(id);
        } catch (error) {
            throw new AppError("cannot delete the city", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }

}

module.exports = CityService;