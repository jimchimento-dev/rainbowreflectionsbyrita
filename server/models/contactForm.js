const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });

const contactForm = mongoose.model('Contact', contactSchema);

module.exports = contactForm;