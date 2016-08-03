var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET products that match the filter */
router.post('/', function(req, res) {
	//here will call the database, for dev purposes I'm reading the file from the file system
	var response = JSON.parse(fs.readFileSync("data/products.json", "utf8")).products;
	console.log(req.body);
	//Here is the filter. With a higher order function !
	res.json(response.filter(function(element){
		return (element.name.substr(0,req.body.queryString.length).toLowerCase() === req.body.queryString.toLowerCase())
	}));
});

module.exports = router;