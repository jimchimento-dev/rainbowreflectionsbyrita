const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    itemName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;