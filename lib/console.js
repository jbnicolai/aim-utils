'use strict';

//load native modules

var util = require('util');
var Events = require('events');

//load 3rd party modules

var moment = require('moment');
var hoek = require('hoek');
var chalk = require('chalk');
var mailer = require('nodemailer');

var white = chalk.white;
var red = chalk.red;
var yellow = chalk.yellow;
var cyan = chalk.cyan;
var internals = {};


//TODO handle logs in more dynamic way, configure moment, chalk and log levels through options when creating console class constructor function

module.exports = internals.Console = function (options) {
    options = options || {};
    this.timeDate = options.timeDate;
    this.service = options.service;
    this.auth = options.auth;
    this.debugMode = options.debugMode;
    hoek.assert(this.constructor === internals.Console, 'Console must be instantiated using new');
    Events.EventEmitter.call(this);

};

hoek.inherits(internals.Console, Events.EventEmitter);

internals.Console.prototype._dateTime = function () {

  return moment().format(this.timeDate);
};

internals.Console.prototype._format = function (args) {
  return util.format.apply(util, args);
};

internals.Console.prototype.info = function () {
    var time = this._dateTime();
    var msg = this._format(arguments);
    return console.info(white(time, '- [info] -',msg));
};

internals.Console.prototype.warn = function () {
    var time = this._dateTime();
    var msg = this._format(arguments);
    return console.warn(cyan(time,'- [warn] -',msg));
};

internals.Console.prototype.debug = function () {
    if (this.debugMode === true) {
      var time = this._dateTime();
      var msg = this._format(arguments);
      return console.warn(yellow(time,'- [debug] -', msg));
    } else {
      return this._stop;
    }

};

internals.Console.prototype.request = function () {
  var time = this._dateTime();
  var msg = this._format(arguments);
  return console.info(green(time, '- [request] -', msg));

}


internals.Console.prototype.error = function () {
  var time = this._dateTime();
  var msg = this._format(arguments);
  return console.error(red(time, '- [error] -', msg));
};

internals.Console.prototype.fatal = function () {
    var time = this._dateTime();
    var msg = this._format(arguments);
    console.error(red(time,'- [fatal] -', msg));
    this._stopNodeJS();
};


internals.Console.prototype._stopNodeJS = function (pack) {
    if ( pack ) {
        this.info('stopping server pack');
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


internals.Console.prototype.send = function (request, err, next) {
    this.text = {};
    this.text.request = request;
    this.text.err = err;
    this.transporter = mailer.createTransport({
			service: this.service,
			auth: {
				user: this.auth.user,
				pass: this.auth.pass
			}
		});


		this.message = {
			from: 'Sender Name <test@example.com>',

			// Comma separated list of recipients
			to: '"support" <suppport@circabs.com>',

			// Subject of the message
			// subject: 'Message from github ✔', //
      subject: err,

			text: this.text
		};

		transporter.sendMail(message, function(error, info) {
			if (error) {
				this.error('Error occurred');
				this.error(error.message);
				return next (error);
			}
			this.info('Message sent successfully!');
			this.info('Server responded with "%s"', info.response);
      return next()
		});
};





// internals.Console.prototype._close = function () {
//         var self = this;
//         self.error('Closing down');
//           setTimeout(function () {
//               process.exit();
//         }, 4000);
//
//
// };
