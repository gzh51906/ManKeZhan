const jwt = require("jsonwebtoken");
const secret = "wangjiaweihuanglinfangchenwei";
function create(data, expiresIn = 60 * 60 * 2) {
    let token = jwt.sign({ data }, secret, {

        expiresIn
    });
    return token;
}
function verify() {

}
module.exports = { create, verify }