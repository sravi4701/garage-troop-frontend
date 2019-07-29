const GarageModel = require('../db-models/garages');

class Garages {
    async addGarage(data) {
        try {
            const newGarage = new GarageModel(data);
            return await newGarage.save();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new Garages();
