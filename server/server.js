const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { MONGOURI } = require('./config');
const productRouter = require('./routes/productRouter');
const eventRouter = require('./routes/eventRouter');
const serviceRouter = require('./routes/serviceRouter');
const contactRouter = require('./routes/contactRouter')
const userRouter = require('./routes/users');
const cors = require('cors');

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

app.use(cors());
app.use(express.json());
app.use('/shop', productRouter);
app.use('/events', eventRouter);
app.use('/services', serviceRouter);
app.use('/user', userRouter);
app.use('/contact', contactRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

