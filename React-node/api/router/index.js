const express = require('express');
const Router = express.Router();
const user = require('./user');
const classifi = require('./classifi');
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/user', user);
Router.use('/classifi', classifi);
module.exports = Router;

