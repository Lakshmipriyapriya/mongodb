var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Welcome ');
});

var users = require('../src/resources/users_operations')
var posts = require('../src/resources/post_operations')
var gets = require('../src/resources/get_operations')
router.get('/all', function(req, res, next) {
  users.getAllUserDetails(req, res)
});

router.get('/:userId', function(req, res, next) {
  users.getOneUserDetails(req, res)
});

router.post('/', function(req, res, next) {
  users.createUserDetails(req, res)
});

router.put('/:userId', function(req, res, next) {
  users.updateUserDetails(req, res)
});

router.delete('/:userId', function(req, res, next) {
  users.removeUserDetails(req, res)
});

router.get('/posts/my',function(req,res,next){
	posts.getMyPostDetails(req,res)
});
 router.post('/posts/my',function(req,res,next){
 	posts.displayMyPostDetails(req,res)
 });

module.exports = router;
