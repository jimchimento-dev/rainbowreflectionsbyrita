const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { MONGOURI } = require('./config');

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected!')
});

mongoose.connection.on('error', () => {
    console.log('Error connecting to MongoDB')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

