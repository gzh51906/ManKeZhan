const express = require('express');
const Router = express.Router();
const user = require('./user');
const userhead = require('./userhead');
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/user', user);
Router.use('/userhead', userhead);
module.exports = Router;

