//引入express
const express = require('express');
const router = require('./router/index.js');
const { PORT } = require('./config.json');
//引入自定义的端口号
// const PORT = require('./config.json');
//创建一个服务器
const app = express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }
});
//创建一个静态服务器
app.use(express.static('./'));
//路由
app.use(router);
app.listen(PORT, () => {
    console.log('9876服务器打开了', PORT);
})

