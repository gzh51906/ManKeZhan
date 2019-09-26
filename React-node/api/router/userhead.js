const express = require('express');
const multer = require('multer');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
var upload = multer({ dest: 'uploads/' })//上传目录
//增
Router.post("/", upload.single("avatar"), (req, res) => {
    res.send("success")
});

module.exports = Router;