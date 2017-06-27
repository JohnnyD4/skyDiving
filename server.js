var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var fs = require('fs');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.get("/", function(req, res) {
	
	res.sendFile(__dirname + "/home.html");
});

app.get("/table", function(req, res) {

	res.sendFile(__dirname + "/table.html");
});

app.get("/reserve", function(req, res) {

	res.sendFile(__dirname + "/reserve.html");
});

app.get("/style.css", function(req, res) {

	fs.readFile(__dirname + "/style.css", "utf8", function(err, data) {

		res.writeHead(200, {"Content-type": "text/css"});
		res.end(data);
	})
});



app.listen(PORT, function() {
	console.log(PORT);
})