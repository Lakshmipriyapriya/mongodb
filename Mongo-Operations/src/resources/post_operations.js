var User = require('../../models/user');
var logger = require('./../../loggers/index');
//var config=require('config');
var request = require('request');


var getMyPostDetails = function(req, res){
	var postId = req.query.postId;
	var url = "https://jsonplaceholder.typicode.com/posts/" + postId;
	return request(url, function(error, responsePostDetails){
		res.setHeader("content-type", "application/json");
		return res.send(responsePostDetails.body);
	})
}

exports.getMyPostDetails = getMyPostDetails