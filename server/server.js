const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRouter = require('./routes/productRouter');
const eventRouter = require('./routes/eventRouter');
const serviceRouter = require('./routes/serviceRouter');
const contactRouter = require('./routes/contactRouter')
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const cors = require('cors');
const config = require('config');

const port = process.env.PORT || 5000;

const db = config.get('mongoURI')

mongoose.connect(db, {
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
app.use('/register', userRouter);
app.use('/contact', contactRouter);
app.use('/login', authRouter)
// app.use('/cart', cartRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

