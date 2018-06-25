 var mocha = require('mocha');
 var assert = require('assert');
 var sinon=require('sinon');
 var tools= require("./../db");
 var userPosts = require('./../src/resources/post_operations');
 var _ = require('underscore')
 var expect= require("chai").expect;

 describe('Post Operations', function(){
 	it("should get user's post details", function(done){
 		var req = sinon.spy();
 		var res = sinon.spy();
 			res = { json: sinon.spy(), setHeader: sinon.spy(), send: sinon.spy() }
 		var req ={
 			"query":{
 				"postId" : 100
 			}
 		}
 		userPosts.getMyPostDetails(req, res).then(function(postDetails){
 			chai.expect( postDetails.id, 100);
 			done();
 		})
 	})
 })