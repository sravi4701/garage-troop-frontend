const next = require('next');
const express = require('express');
const config = require('config');
const morgan = require('morgan');
const GarageController = require('./controller/garages');
const Utils = require('./utils');

require('./modules/db'); // setup mongodb

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });

const handler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(morgan('dev'));

    app.get('/', (req, res) => {
        const page = '/';
        nextApp.render(req, res, page);
    });

    app.post('/api/garages', Utils.isValidSecretKey, GarageController.handleAddGarages.bind(GarageController));
    app.post('/api/garages/multi', Utils.isValidSecretKey, GarageController.handleAddManyGarages.bind(GarageController));
    app.post('/api/garages/:id/mechanic', Utils.isValidSecretKey, GarageController.handleAddMechanic.bind(GarageController));

    app.get('*', (req, res) => {
        return handler(req, res);
    });

    app.listen(config.get('app.PORT'), error => {
        if (error) {
            throw error;
        }
        console.log('app is listening on 5000');
    });
});
