const express = require('express');
const User = require('../models/user');

const userRouter = express.Router();

userRouter.post('/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
        return res.status(422).json({ error: 'Please include all fields.' });
    }

    User.findOne({ email: email })
        .then((existingUser) => {
            if (existingUser) {
                return res.status(422).json({ error: 'User already exists with that email address!' })
            }

            const user = new User({
                firstName,
                lastName,
                email,
                password
            })

            user.save()
                .then(user => {
                    res.json({ message: 'Account succesfully created!' });
                })
                .catch(err => {
                    console.log(err);
                })
        })
})

userRouter.post('signin', (req, res) => {

});

module.exports = userRouter;