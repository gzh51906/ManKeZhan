const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');

Router.get('/', async (req, res) => {
    let result;
    try {
        let data = await mysql(`SELECT * FROM  classification WHERE 1`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err })
    }
    res.send(result)
});

Router.get('/classify/:id', async (req, res) => {
    let { id } = req.params;
    // let result;
    // try {
    //     let data = await mysql(`SELECT * FROM  classification WHERE 1`)
    //     result = formatData({ data });
    // } catch (err) {
    //     result = formatData({ code: 0, data: err })
    // }
    res.send("55")
});

module.exports = Router;