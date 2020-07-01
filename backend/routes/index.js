const express = require('express');
const router = express.Router();
//prevent use URL go to the dashboard without login
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//home page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));//'welcome' for the file name

//dashboard
router.get('/users/dashboard', ensureAuthenticated, (req, res) =>  //ensureAuthenticated as a second prameter to pretect the dashboard
    res.render('dashboard', {
        user: req.user //pass the user name to dashboard 
    })
);

module.exports = router;