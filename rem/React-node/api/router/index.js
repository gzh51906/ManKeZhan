const express = require('express');
const Router = express.Router();

const { token, formatData } = require('../utils')

const list = require('./list');

Router.use(express.json(), express.urlencoded({ extended: false }));

Router.use('/list',list);


module.exports = Router;

