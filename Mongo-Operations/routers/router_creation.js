var express = require('express')
var app = express()
var router = express.Router();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
module.exports = router