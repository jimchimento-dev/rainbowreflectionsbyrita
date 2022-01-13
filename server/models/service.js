const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    serviceName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        min: 50,
        max: 90
    },
    time: {
        type: Number,
        min: 30,
        max: 60
    }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;