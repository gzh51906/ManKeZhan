const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');

Router.get('/:id', async (req, res) => {
    let { id } = req.params;
    let result;
    try {
        let data = await mysql(`SELECT * FROM  bookshelf WHERE phone LIKE '%${id}%'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err })
    }
    res.send(result)
});
Router.delete('/', async (req, res) => {
    let { phone, comic_id } = req.body;
    try {
        let data = {}
        data.spe = await mysql(`DELETE FROM reactproject.bookshelf WHERE  bookshelf.phone =  '${phone}' AND  bookshelf.comic_id =${comic_id}`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});
//这个是添加用的接口
// axios.post("http://localhost:9876/bookshelf", { phone: phone.... })
Router.post('/', async (req, res) => {
    let { comic_id, phone, title, cover, chapter_num, theme_id = 1, ischeck = "false" } = req.body;
    try {
        let data = {}
        mysql(`DELETE FROM reactproject.bookshelf WHERE  bookshelf.phone =  '${phone}' AND  bookshelf.comic_id =${comic_id}`)
        data.spe = await mysql(`INSERT INTO bookshelf(comic_id, phone, title, cover, chapter_num, theme_id,ischeck) values ('${comic_id}','${phone}','${title}','${cover}','${chapter_num}','${theme_id}','${ischeck}')`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});
module.exports = Router;