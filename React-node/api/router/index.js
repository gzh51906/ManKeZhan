const express = require('express');
const Router = express.Router();
const user = require('./user');
const { token, formatData } = require('../utils')
const classifi = require('./classifi');
const userhead = require('./userhead');
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/user', user);
Router.use('/classifi', classifi);
Router.use('/userhead', userhead);
Router.get("/verify", (req, res) => {
    let authorization = req.header("Authorization");
    let result = token.verify(authorization);
    if (result) {
        res.send(formatData())
    } else {

        res.send(formatData({ code: 0 }))
    }
})
module.exports = Router;

