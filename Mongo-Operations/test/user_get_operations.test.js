var mocha = require('mocha');
 var assert = require('assert');
 var sinon=require('sinon');
 var tools= require("../db");
 var userPosts = require('../src/resources/get_operations');
 var _ = require('underscore')
 var expect= require("chai").expect;

 describe('get Operations', function(){
 	it("should get user's  details", function(done){
 		var req = sinon.spy();
 		var res = sinon.spy();
 			res = { json: sinon.spy(), setHeader: sinon.spy(), send: sinon.spy() }
 		var req ={
 			"query":{
 				"postId" : 100
 			}
 		}
 		userPosts.displayMyPostDetails (req, res).then(function(getDetails){
 			chai.expect( getDetails.id, 100);
 			done();
 		})
 	})
 })