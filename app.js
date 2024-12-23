'use strict'
const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
//const PORT = 8080;
const PORT = readEnvVar("PORT_NUMBER", 8080);


function readEnvVar(envVar, defaultValue) {
	let ev, ret = defaultValue;

	if (envVar && (ev = process.env[envVar]))
		ret = Number.parseInt(ev, 10);
	return ret;
}

router.use(function (req, res, next) {
	console.log(`${req.method} ${req.url}`);
	next();
});

router.get('/', function (req, res) {
	res.sendFile(path + 'index.html');
});

router.get('/sharks', function (req, res) {
	let file = path + 'sharks.html'
	var tmp = file.replace(/\\/g, "/")

	console.log(`${req.method} ${tmp}`);
	res.sendFile(file);
});

app.use(express.static(path));
app.use('/', router);

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}!`)
})
