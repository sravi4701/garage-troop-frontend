require('dotenv').config();
const next = require('next');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT;

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });

const handler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    // app.use(morgan('dev'));


    app.get('/search', (req, res) => {
        const page = '/search';
        const query = { ...req.query };
        nextApp.render(req, res, page, query);
    });

    app.get('/', (req, res) => {
        const page = '/';
        nextApp.render(req, res, page);
    });

    app.get('/profile/:id', (req, res) => {
        const page = '/profile';
        const query = { id: req.params.id };
        return nextApp.render(req, res, page, query);
    });

    app.get('*', (req, res) => {
        return handler(req, res);
    });

    app.listen(PORT, error => {
        if (error) {
            throw error;
        }
        console.log(`app is listening on ${PORT}`);
    });
});
