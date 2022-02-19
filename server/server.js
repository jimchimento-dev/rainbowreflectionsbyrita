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
const stripe = require('stripe')('stripeSecret');

app.post('/checkout', async (req, res) => {
    const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: product.name,
                        images: [product.image]
                    },
                    unit_amount: product.amount * 100
                },
                quantity: product.quantity
            }
        ],
        mode: "payment",
        success_url: `$http://localhost:3000/cart`,
        cancel_url: `$http://localhost:3000/cart`
    })

    res.json({ id: session.id })
})

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

