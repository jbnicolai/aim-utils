'use strict';

//load native modules

var util = require('util');
var Events = require('events');

//load 3rd party modules

var moment = require('moment');
var hoek = require('hoek');
var chalk = require('chalk');

var white = chalk.white;
var red = chalk.red;
var yellow = chalk.yellow;
var cyan = chalk.cyan;
var internals = {};
var timeDate = 'DD-MM-YYYY - HH:mm:SSS';

//TODO handle logs in more dynamic way, configure moment, chalk and log levels through options when creating console class constructor function

module.exports = internals.Console = function (options) {
    hoek.assert(this.constructor === internals.Console, 'Console must be instantiated using new');
    console.log('loading console');
};

hoek.inherits(internals.Console, Events.EventEmitter);

internals.Console.prototype._dateTime = function () {
  return moment().format(timeDate);
};

internals.Console.prototype._format = function (args) {
  return util.format.apply(util, args);
};

internals.Console.prototype.info = function () {
    var time = this._dateTime();
    var msg = this._format(arguments);
    console.info(white(time, '- [info] -',msg));
};

internals.Console.prototype.warn = function () {
    var time = this._dateTime();
    var msg = this._format(arguments);
    console.warn(cyan(time,'- [warn] -',msg));
};

internals.Console.prototype.debug = function () {
    var time = this._dateTime();
    var msg = this._format(arguments);
    console.warn(yellow(time,'- [debug] -', msg));
};


internals.Console.prototype.error = function () {
  var time = this._dateTime();
  var msg = this._format(arguments);
  console.error(red(time, '- [error] -', msg));
};

internals.Console.prototype.fatal = function () {
    var time = this._dateTime();
    var msg = this._format(arguments);
    console.error(red(time,'- [fatal] -',msg));
    this._stopNodeJS();
};


internals.Console.prototype._stopNodeJS = function (pack) {
    if ( pack ) {
        logInfo('stopping server pack');
        if ( pack ) {
            pack.stop();
            for (var moduleName in pack.app.databases ) {
                if ( ! pack.app.databases.hasOwnProperty(moduleName) ) continue;
                if (! pack.app.databases[moduleName].db ) continue;
                pack.app.databases[moduleName].db.close();
            }       // end of for loop
        }
    }
    this.error('stopping node.js server');
    process.exit(8888);
};

internals.Console.prototype._stop = function () {
    //TODO implement stop method to console
};


internals.Console.prototype._start = function () {
    //TODO implement start method to console
};



internals.Console.prototype._file = function () {
    //TODO implement writing logfile out to disk
};
