const garageService = require('../services/garages');

const StandardResponse = require('../utils').getStandardResponse;

class Garages {
    async handleAddGarages(req, res, next) {
        try {
            const resData = await garageService.addGarage(req.body);
            return res.send(StandardResponse(resData));
        } catch (error) {
            return res.status(400).send({ error: true, message: error.message });
        }
    }

    async handleAddManyGarages(req, res, next) {
        try {
            const resData = await garageService.addManyGarages(req.body);
            return res.send(StandardResponse(resData));
        } catch (error) {
            return res.status(400).send({ error: true, message: error.message });
        }
    }

    async handleAddMechanic(req, res, next) {
        try {
            const id = req.params.id;
            const resData = await garageService.addMechanics(id, req.body);
            return res.send(StandardResponse(resData));
        } catch (error) {
            return res.status(400).send({ error: true, message: error.message });
        }
    }
}

module.exports = new Garages();
