var db = require('../fn/mysql-db');

exports.loadAll = () => {
	var sql = 'select * from kh';
	return db.load(sql);
}