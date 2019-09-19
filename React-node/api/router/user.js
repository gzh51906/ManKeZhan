const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
//增
Router.post('/', async (req, res) => {
    let { username, password, phone } = req.body;
    try {
        let data = {}
        data.spe = await mysql(`INSERT INTO user( username,password, phone) values ('${username}','${password}','${phone}')`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});
//改
Router.patch('/', async (req, res) => {
    let { username, password, phone } = req.body;
    try {
        let data = {}
        data.spe = await mysql(`UPDATE  reactproject.user SET  phone = '${phone}',password=  '${password}' WHERE  user.username =  '${username}' AND  user.password =${password}`)
        result = formatData({ data });

    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});
//删
Router.delete('/', async (req, res) => {
    let { password, username } = req.body;


    try {
        let data = {}
        data.spe = await mysql(`DELETE FROM reactproject.user WHERE  user.username =  '${username}' AND  user.id =${password}`)
        result = formatData({ data });

    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});
//查
Router.get('/', async (req, res) => {
    let { username } = req.query;
    let result;
    try {
        let data = await mysql(`SELECT * FROM  user WHERE username = '${username}'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err })
    }
    res.send(result)
});

module.exports = Router;