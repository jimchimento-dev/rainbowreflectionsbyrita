const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const userRouter = express.Router();

userRouter.get('/register', (req, res) => {
    User.find()
        .then(user => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        })
        .catch(err => next(err));
});

userRouter.post('/register', (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all of the fields' });
    }

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists with that email address!' });

            const newUser = new User({
                firstName,
                lastName,
                email,
                password
            });

            // Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            jwt.sign(
                                { id: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if (err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            firstName: user.firstName,
                                            lastName: user.lastName,
                                            email: user.email
                                        }
                                    })
                                }
                            )
                        })
                })
            })
        })
});

userRouter.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})


module.exports = userRouter;