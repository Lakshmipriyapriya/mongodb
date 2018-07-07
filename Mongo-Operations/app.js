var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var tasks= require('./routes/tasks');
//var posts=require('/.routes/post');
//var details= require('./routes/details');
//var routers=require('./routers/router_creation');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use('/tasks',tasks);
app.use('/users', users);
app.use('/admin', function(req, res){
  res.send({"welcome":"all"});
})
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var db = require('./db/index')
module.exports = app;