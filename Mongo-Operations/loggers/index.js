//  var winston = require('winston'),
//      _ = require('lodash'),
//      Dconsole = require('winston-dconsole'),
//   // lumberjack = require('winston-lumberjack'),
//      localConfig = {};
//      var config = require("./config.json");
// var logging = require("logger-winston");
// var logging = require("../logger-winston");
//  logging.init(config);
var winston = require('winston');
var options = {
  file: {
    level: 'info',
    filename: "./logs/app.log",
    handleExceptions: true,
    json: true,
    maxsize: 5242880, 
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};
var logger = new winston.Logger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, 
});
logger.stream = {
  write: function(message, encoding) {
    
    logger.info(message);
  },
};
module.exports=logger;