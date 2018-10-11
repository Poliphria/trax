const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('./models/UserModel');

// this is the login page route for get and post requests
router.route('login')  
    .get('login', (req, res) => {
        res.send({ message: 'This is the login page'});
    })
    .post('login', (req, res) => {
        // get the login json from the req body
        const loginInfo = req.body;
        let found = User.isMatch(loginInfo);

        // if the user exists then redirect the user to the home page
        // if they dont then send back an error
        if (found) {
            res.redirect('/home', 301);
        } else {
            res.status(401);
            res.send({ error: 'Invalid login credentials'});
        }
    })