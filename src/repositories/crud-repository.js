const { Logger } = require("../config");


class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("There was error in crud:Repositry :create");
            throw error;
        }
    }

    async destroy(data) {
        try {
            const rersponse = await this.model.destroy({
                where: {
                    id: data
                }
            });
        } catch (error) {
            Logger.error("There was error in crud:Repositry :destroy");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("There was error in crud:Repositry :get");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("There was error in crud:Repositry :getAll");
            throw error;
        }
    }

    async updateOne(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id
                }
            })
        } catch (error) {

        }
    }
}



module.exports = CrudRepository






