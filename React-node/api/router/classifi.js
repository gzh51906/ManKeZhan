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

Router.get('/search', async (req, res) => {
    let { keyword } = req.query;
    let result;
    try {
        // SELECT * FROM list  WHERE title  LIKE '%血族%' LIMIT 0, 30
        let data = await mysql(`SELECT * FROM list  WHERE title  LIKE '%${keyword}%' LIMIT 0, 30`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: [] })
    }
    res.send(result)
});

Router.get('/rand', async (req, res) => {
    let result;
    try {
        // select  *  from  表名 order by rand() limit 20
        let data = await mysql(`select  *  from  list order by rand() limit 9`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: [] })
    }
    res.send(result)
});
Router.get('/data', async (req, res) => {
    let result;
    try {
        let data = await mysql(`SELECT * FROM  list ORDER BY RAND() LIMIT 3`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err })
    }
    res.send(result)
});

Router.get('/classify/:id', async (req, res) => {
    let { id } = req.params;
    let result;
    try {
        let data = await mysql(`SELECT * FROM  list WHERE theme_id LIKE '%${id}%'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err })
    }
    res.send(result)
});

Router.get('/detail/:id', async (req, res) => {
    let { id } = req.params;
    let result;
    try {
        let data = await mysql(`SELECT * FROM  list WHERE comic_id = '${id}'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err })
    }
    res.send(result)
});

Router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let result;
    try {
        let data = await mysql(`SELECT * FROM  classification WHERE id = '${id}'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err })
    }
    res.send(result)
});

module.exports = Router;