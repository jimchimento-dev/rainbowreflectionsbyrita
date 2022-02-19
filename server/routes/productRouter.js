const express = require('express');
const Product = require('../models/product');

const productRouter = express.Router();

productRouter.get('/', (req, res, next) => {
    Product.find()
        .then(products => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(products);
        })
        .catch(err => next(err));
});

productRouter.get('/:id', (req, res, next) => {
    Product.findOne({ _id: req.params.id })
        .then(product => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(product);
        })
        .catch(err => next(err));
});

module.exports = productRouter;