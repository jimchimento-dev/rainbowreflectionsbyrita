const express = require('express');
const Contact = require('../models/contactForm');

const contactRouter = express.Router();

contactRouter.post('/', (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const number = req.body.number
    const message = req.body.message

    const newRequest = new Contact({
        firstName,
        lastName,
        email,
        number,
        message
    });

    newRequest.save();
})

contactRouter.get('/', (req, res, next) => {
    Contact.find()
        .then(contact => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(contact);
        })
        .catch(err => next(err));
})


module.exports = contactRouter;