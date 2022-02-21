const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRouter = require('./routes/productRouter');
const eventRouter = require('./routes/eventRouter');
const serviceRouter = require('./routes/serviceRouter');
const contactRouter = require('./routes/contactRouter');
const cartRouter = require('./routes/cartRouter');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const cors = require('cors');
const config = require('config');
const stripe = require('stripe')();

app.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        billing_address_collection: 'auto',
        shipping_address_collection: {
            allowed_countries: ['US'],
        },
        payment_method_types: ['card'],
        line_items: [
            {
                price: 'price_1KUyd0EfnOPhvCuxyt77I6nT',
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                    maximum: 5
                },
                quantity: 1,
            },
            {
                price: 'price_1KUyaUEfnOPhvCuxZIXlPior',
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                    maximum: 5
                },
                quantity: 1,
            }
        ],
        mode: "payment",
        automatic_tax: { enabled: true },
        success_url: `http://localhost:3000`,
        cancel_url: `http://localhost:3000/cart`
    });
    res.json({ id: session.id })
});

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
});

app.use(cors());
app.use(express.json());
app.use('/shop', productRouter);
app.use('/events', eventRouter);
app.use('/services', serviceRouter);
app.use('/register', userRouter);
app.use('/contact', contactRouter);
app.use('/login', authRouter)
app.use('/cart', cartRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

