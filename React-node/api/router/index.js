const express = require('express');
const Router = express.Router();
const user = require('./user');
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/user', user);
module.exports = Router;

