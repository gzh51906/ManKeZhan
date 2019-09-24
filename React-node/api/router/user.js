const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData, token } = require('../utils/index');
//增
Router.post('/reg', async (req, res) => {
    let { password, phone } = req.body;
    try {
        let data = {}
        data.spe = await mysql(`INSERT INTO user( password, phone) values ('${password}','${phone}')`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});

// 验证用户名是否存在/存在范湖fail；
Router.get('/check', async (req, res) => {
    let { phone } = req.query;
    let data
    try {
        data = await mysql(`SELECT * FROM user WHERE phone  LIKE '${phone}' LIMIT 0, 30`)
        data = data[0];
        if (data) {
            res.send(formatData({ code: 0 }))
        } else {
            res.send(formatData())
        }
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})

Router.post('/login', async (req, res) => {
    let { phone, password } = req.body;
    let data
    try {
        data = await mysql(`SELECT * FROM  user WHERE phone = '${phone}' AND  user.password ='${password}'`)
        data = data[0]
        // 生成token，并返回前端
        let authorization = token.create(phone);
        if (data) {
            res.send(formatData({ data: { phone: data.phone, authorization } }))
        } else {
            res.send(formatData({ code: 0 }))
        }
    } catch (err) {
        res.send(formatData({ code: 0 }))
    }
})
//改
Router.patch('/', async (req, res) => {
    let { username, password, phone } = req.body;
    try {
        let data = {}
        data.spe = await mysql(`UPDATE  reactproject.user SET  phone = '${phone}',password=  '${password}' WHERE  user.username =  '${username}' AND  user.password =${password} `)
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