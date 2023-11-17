const { AirPlaneRepostory } = require("../repositories");

class AirplaneService {

    constructor() {
        this.AirplaneRepo = new AirPlaneRepostory();
    }

    async createAirplane(data) {
        try {

            const airplane = await this.AirplaneRepo.create(data);
            return airplane;
        } catch (error) {
            throw error;
        }

    }

}







module.exports = AirplaneService;