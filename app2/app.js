var express = require('express');
var mysql = require('mysql'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'), // ?
    cors = require('cors'); 	// ?

var webapp2Ctrl = require('./api/webapp2');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/locationidentifer/', webapp2Ctrl);

var PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running on PORT ${PORT}`);
});