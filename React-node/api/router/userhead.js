const express = require('express');
const multer = require('multer');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
var upload = multer({ dest: '' })//上传目录
//增
Router.post("/userhead", upload.single(""), (req, res) => {

});

module.exports = Router;