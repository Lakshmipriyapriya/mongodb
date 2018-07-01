 var mocha = require('mocha');
 var assert = require('assert');
 var sinon=require('sinon');
 var tools= require("./../db");
 var userPosts = require('./../src/resources/post_operations');
 var _ = require('underscore')
 var expect= require("chai").expect;
 var idForOperation;

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
 
 describe('put operations', function(){
 	it("should create user put details",function(done){
 		var req=sinon.spy();
 		var res= sinon.spy();
 		res = { json: sinon.spy(), setHeader: sinon.spy(), send: sinon.spy() }
 		var req={
 			"body":{
 				"userId":"120",
 				"body":"hai their",
 				"title":"creating the details"

 			}

 		}
 		userPosts.createMyPostDetails(req,res).then(function(putDetails){
 			chai.expect(putDetails.userId,120);
 			chai.expect(putDetails.body,"hai their");
 			chai.expect(putDetails.title,"creating the details");
 			done();
 		})
 	})
 })	
it('should Update user details with provided data', function (done) {
        let req = sinon.spy();
        let res = sinon.spy();
            //res = { json : sinon.spy() }
            res = { send : sinon.spy(), json: sinon.spy() }
            req = {
              "params":{
                "id": idForOperation
              },
              "body":{
              	"userId":"10",
 				"body":"hai their",
 				"title":"updating the details"
                
              }
              
            }
            userPosts. updateMyPostDetails(req, res).then(function(updatePostsData){
            	chai.expect(putDetails.userId,10);
 			chai.expect(putDetails.body,"hai their");
 			chai.expect(putDetails.title,"updating the details");
           console.log('updatePostsData....',updatePostsData);
         done();
        })
      });
it('should delete posts details with provided data', function (done) {
         let req = sinon.spy();
         let res = sinon.spy();
             res = { json : sinon.spy(),send:sinon.spy() };
             req = {
               "params":{
                 "id": idForOperation
               }
             }
         userPosts.deleteMyPostDetails(req,res).then(function(removePostsData){
           console.log('removePostsData', removePostsData);
           done();
        })
    });
});

    






