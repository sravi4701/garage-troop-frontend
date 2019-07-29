const config = require('config');
const garageService = require('../services/garages');

class Garages {
    async handleAddGarages(req, res, next) {
        const secretKey = req.headers.secret_key;
        console.log('secret key', secretKey);
        console.log('headers', req.headers);
        if (config.get('app.SECRET_KEY') !== secretKey) {
            return res.status(403).send({ error: true, message: 'Not allowed to perform action' });
        }
        return res.send('ehllow');
    }
}

module.exports = new Garages();
