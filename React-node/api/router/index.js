const express = require('express');
const Router = express.Router();
const user = require('./user');
const classifi = require('./classifi');
const userhead = require('./userhead');
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/user', user);
Router.use('/classifi', classifi);
Router.use('/userhead', userhead);
module.exports = Router;

