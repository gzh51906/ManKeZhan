const mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'reactproject',
    multipleStatements: true
});
module.exports = sql => {
    return new Promise((resolove, reject) => {
        pool.query(sql, (error, rows) => {
            if (error) {
                reject(error);
            }
            resolove(rows);
        })
    })
}