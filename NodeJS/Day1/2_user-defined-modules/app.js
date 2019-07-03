// const message = require('./message.js');
// console.log(message);
// console.log(message.firstname);
// console.log(message.lastname);
// message.log("Hi");

// const message = require('./message');
// var e1 = new message.Employee("Manish");
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// const logger = require('./logger');

// const logger = require('./logger1/mylogger');
// const logger = require('./logger1');

// const loggerService = require('./loggerService');
// loggerService.log("From app.js");


// const loggerFactory = require('./loggerFactory');

// var dbLogger = loggerFactory.DBLFactory.getLogger();
// dbLogger.log("Hi");

// var flLogger = loggerFactory.FLFactory.getLogger();
// flLogger.log("Hi");


//const Logger = require('./loggerSingle');
// var l1 = Logger.Logger;
// var l2 = Logger.Logger;
// console.log(l1 == l2);
// l1.log('hello');

// const Logger = require('./loggerSingle');
// var l1 = Logger.getLogger();
// var l2 = Logger.getLogger();
// console.log(l1 == l2);

const singleton = require('./singleton/Logger')

var l1 = singleton.getInstance();
var l2 = singleton.getInstance();

console.log(l1 === l2);