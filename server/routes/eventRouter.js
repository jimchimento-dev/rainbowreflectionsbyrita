const express = require('express');
const Event = require('../models/event');

const eventRouter = express.Router();

eventRouter.get('/', (req, res, next) => {
    Event.find()
        .then(events => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(events);
        })
        .catch(err => next(err));
});

eventRouter.get('/:id', (req, res, next) => {
    Event.findOne({ _id: req.params.id })
        .then(event => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(event);
        })
        .catch(err => next(err));
});


module.exports = eventRouter;