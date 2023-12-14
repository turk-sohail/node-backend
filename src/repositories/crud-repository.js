const { Http } = require("winston/lib/winston/transports");
const { Logger } = require("../config");
const { AppError } = require("../utils");
const { StatusCodes } = require("http-status-codes");


class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {

        const response = await this.model.create(data);
        return response;

    }

    async destroy(data) {

        const rersponse = await this.model.destroy({
            where: {
                id: data
            }
        });
    }

    async get(data) {

        const response = await this.model.findByPk(data);
        return response;

    }

    async getAll() {

        const response = await this.model.findAll();
        return response;

    }

    async updateOne(id, data) {

        const response = await this.model.update(data, {
            where: {
                id
            }
        })
        return response;

    }
}



module.exports = CrudRepository






