const conn = require('../modules/db');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const GarageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
});

const GarageModel = conn.model('garages', GarageSchema);

module.exports = GarageModel;
