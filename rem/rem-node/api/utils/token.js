const jwt = require("jsonwebtoken");
const secret = "wangjiaweihuanglinfangchenwei";
function create(data, expiresIn = 60 * 60 * 2) {
    let token = jwt.sign({ data }, secret, {
        expiresIn
    });
    return token;
}
function verify(token) {
    let res = false;
    try {
        res = jwt.verify(token, secret);//得出解密后的结果Object:{data:xxx...}

    } catch (err) {
        res = false;
    }

    return res;
}
module.exports = { create, verify }