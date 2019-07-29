var path = require("path");
var port = 3000;
var serverUrl = "localhost";
var express = require("express");
var logger = require("morgan");
var app = express();

//Log requests
app.use(logger("dev"));

//Serve static files
app.use(express.static(path.join(__dirname, 'src')));

//-------Routes--------
app.get('/', function(req, res) {
    res.render("index.html");
})

app.get('*', function(req, res) {
    res.send("Hello World");
});


app.listen(port);
console.log("Listening at " + serverUrl + ":" + port);
