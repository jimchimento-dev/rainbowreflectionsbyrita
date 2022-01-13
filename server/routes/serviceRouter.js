const express = require('express');
const Service = require('../models/service');

const serviceRouter = express.Router();

serviceRouter.get('/', (req, res, next) => {
    Service.find()
        .then(services => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(services);
        })
        .catch(err => next(err));
});

serviceRouter.get('/:id', (req, res, next) => {
    Service.findOne({ _id: req.params.id })
        .then(service => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(service);
        })
        .catch(err => next(err));
});


module.exports = serviceRouter;