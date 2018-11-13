var express = require('express');
var clientRepo = require('../repos/clientRepos');

var router = express.Router();

router.get('/', (req, res) => {
	clientRepo.loadAll()
		.then(rows => {
			res.json(rows);
		}).catch(err => {
			console.log(err);
			res.statusCode = 500;
			res.end('View error log on console');
		})
})

module.exports = router;