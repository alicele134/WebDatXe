var mysql = require('mysql');

// Tạo kết nối mysql
var createConnection = () => {
    return mysql.createConnection({
    database: 'ttkh',
    host:"localhost",
    user: "root", 
    password: "kimhanh"
    });
}

exports.load = sql => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();
        cn.query(sql, (err, rows, fields) => {
            if (err) {
            	reject(err);
            } else {
            	resolve(rows);
            }
            cn.end();
        });
    });
}