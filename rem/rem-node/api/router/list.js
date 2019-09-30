const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils');

//获取所有商品
Router.get('/',async (req,res)=>{
    let result;
    try {
        let data = {}
        data.spe = await mysql(`SELECT * FROM list `)
        result = formatData({data});
    }catch(err){
        result = formatData({code : 0,data:err});
    }
    res.send(result)
})

Router.get('/page',async (req,res)=>{
    let {page} = req.query;
    let result;
    try {
        let data = {}
        data.li = await mysql(`SELECT * FROM list ORDER BY comic_id limit ${page},5`)
        result = formatData({data});
    }catch(err){
        result = formatData({code : 0,data:err});
    }
    res.send(result)
})

module.exports = Router;