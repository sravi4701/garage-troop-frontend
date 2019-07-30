const mongoose = require('mongoose');
const config = require('config');

class Utils {
    static schemaTypes() {
        return {
            MANDATORY_STRING: {
                type: String,
                required: true
            },
            OPTIONAL_STRING: {
                type: String
            },
            MANDATORY_NUMBER: {
                type: Number,
                required: true
            },
            OPTIONAL_NUMBER: {
                type: Number
            },
            POINT_COORDINATES: {
                type: { type: String, required: false, default: 'Point' },
                coordinates: [Number] // Long, Lat
            },
            MANDATORY_OBJECT_IDS: { type: [mongoose.Schema.Types.ObjectId], required: true }
        };
    }

    static getStandardResponse(data, meta) {
        return {
            data,
            meta
        };
    }

    static getEnv() {
        return process.env.NODE_ENV;
    }

    static isProd() {
        return process.env.NODE_ENV === 'production';
    }

    static isValidSecretKey(req, res, next) {
        const secretKey = req.headers.secret_key;
        if (config.get('app.SECRET_KEY') !== secretKey) {
            return res.status(403).send({ error: true, message: 'Not allowed to perform action' });
        }
        req.isValidSecret = true;
        return next();
    }
}

module.exports = Utils;
