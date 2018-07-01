var User = require('../../models/user');
var logger = require('./../../loggers/index');
var request = require('request');

var getMyPostDetails = function(req, res){
	var postId = req.query.postId;
	var url = "https://jsonplaceholder.typicode.com/posts/" + postId;
	return request(url, function(error, responsePostDetails){
		res.setHeader("content-type", "application/json");
		return res.send(responsePostDetails.body);
		console.log('got details successfully');
	})
}
var createMyPostDetails=function(req,res){
	//var postId=req.query.postId;
	var createPostDetails ={
			userId : req.body.userId,
			//Id : req.body.Id,
			title : req.body.title,
			body : req.body.body
		}
			

	 var url = "https://jsonplaceholder.typicode.com/posts";
	 return request.post(url, createPostDetails, function(error, responseGetDetails){
	 	return res.send(responseGetDetails.body);
	 })
	} 

var updateMyPostDetails= function(req,res){
  	
  	var updatePostDetails={
  		userId : req.body.userId,
		//Id : req.body.Id,
		title : req.body.title,
		body : req.body.body
	}
	var id = req.query.id;
	var url="https://jsonplaceholder.typicode.com/posts" +id;
	return request.put(url,updatePostDetails , function(error, responseGetDetails){
		if(!error){
			if (req.body.userId != null)
			responseGetDetails.userId = req.body.userId;
		console.log(responseGetDetails.userId);
	// 	if (req.body.Id != null)
	// 	responseGetDetails.Id = req.body.Id;
	
	// console.log(responseGetDetails.Id);

		if (req.body.title != null)
			responseGetDetails.title = req.body.title;
		console.log(responseGetDetails.title);
		if (req.body.body != null)
			responseGetDetails.body = req.body.body;
		console.log(responseGetDetails.body);
		res.setHeader("content-type", "application/json");
	 	return res.send({
	 			statusCode:200,
	 			message:"updated",
	 			body:responseGetDetails.body
	 		});
	 	}
	 })

}
var deleteMyPostDetails = function(req, res){
	var id = req.query.id;
	var url = "https://jsonplaceholder.typicode.com/posts/"+ id ;
	return request(url, function(error, responseRemovedDetails){
		console.log('details that has removed:',responseRemovedDetails.body);
		return res.send('details that has been removed in a given id:'+" "+id);
		console.log('deleted details successfully');
	})
}


			
exports.deleteMyPostDetails=deleteMyPostDetails
exports.getMyPostDetails = getMyPostDetails
exports.createMyPostDetails=createMyPostDetails
exports.updateMyPostDetails=updateMyPostDetails
