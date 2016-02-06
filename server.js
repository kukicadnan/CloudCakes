var express = require("express")
var path = require("path");

var app = express();

app.use(express.static(path.resolve(__dirname + '/public')));

app.get("*", function(req, res){
	res.sendFile(path.resolve(__dirname + '/public/index.html'))
})

app.listen(3000, function(){
	console.log("CloudCakes is ready to serve at localhost:3000")
});