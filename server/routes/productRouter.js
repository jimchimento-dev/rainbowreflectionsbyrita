const express = require('express');
const Product = require('../models/product');
const stripe = require('stripe')();

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

// app.post('/checkout', async (req, res) => {
//     const { itemName, description, image, cost, countInStock } = req.body;
//     const session = await stripe.checkout.sessions.create({
//         billing_address_collection: 'auto',
//         shipping_address_collection: {
//             allowed_countries: ['US'],
//         },
//         payment_method_types: ['card'],
//         line_items: [
//             {
//                 price: cost,
//                 adjustable_quantity: {
//                     enabled: true,
//                     minimum: 1,
//                     maximum: 5
//                 },
//                 quantity: 1,
//             }
//         ],
//         mode: "payment",
//         automatic_tax: { enabled: true },
//         success_url: `http://localhost:3000`,
//         cancel_url: `http://localhost:3000/cart`
//     });
//     res.json({ id: session.id })
// });

module.exports = productRouter;