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
var green = chalk.green;
var internals = {};


//TODO handle logs in more dynamic way, configure moment, chalk and log levels through options when creating console class constructor function

module.exports = internals.Console = function (options) {
    options = options || {};
    this.debugMode = options.debugMode;
    this.timeDate = options.timeDate;
    console.log('Time date', this.timeDate)
    this.service = options.service;
    this.auth = options.auth;
    this.text = options.body;
    this.from = options.from;
    this.to = options.to;
    this.cc - options.cc;
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

internals.Console.prototype._levelPrefix = function (level) {
  var level = level;
  return '- [' +level+ '] -';
};

internals.Console.prototype.info = function () {
    var time = this._dateTime();
    var prefix = this._levelPrefix('info');
    var msg = this._format(arguments);
    if (null === this.timeDate || !this.timeDate || this.timeDate === undefined) {
      return console.warn(white(msg));
    } else {
      return console.info(white(time, prefix, msg));
    }
};

internals.Console.prototype.warn = function () {
    var time = this._dateTime();
    var prefix = this._levelPrefix('warn');
    var msg = this._format(arguments);
    if (null === this.timeDate || !this.timeDate || this.timeDate === undefined) {
      console.log('Should be here')
      return console.warn(cyan(msg));
    } else {
      return console.warn(cyan(time, prefix, msg));
    }


};

internals.Console.prototype.debug = function () {
    var time = this._dateTime();
    var prefix = this._levelPrefix('debug');
    var msg = this._format(arguments);
    if (null === this.timeDate || !this.timeDate || this.timeDate === undefined) {
      return console.warn(yellow(msg));
    } else if (this.debugMode === true) {
      return console.warn(yellow(time, prefix, msg));
    } else {
      return this._stop;
    }

};

internals.Console.prototype.request = function () {
  var time = this._dateTime();
  var prefix = this._levelPrefix('request');
  var msg = this._format(arguments);
  if (null === this.timeDate || !this.timeDate || this.timeDate === undefined) {
    return console.warn(green(msg));
  } else {
    return console.info(green(time, prefix, msg));
  }

}


internals.Console.prototype.error = function () {
  var time = this._dateTime();
  var prefix = this._levelPrefix('error');
  var msg = this._format(arguments);
  if (null === this.timeDate || !this.timeDate || this.timeDate === undefined) {
    return console.warn(red(msg));
  } else {
    return console.info(red(time, prefix, msg));
  }
};

internals.Console.prototype.fatal = function () {
    var time = this._dateTime();
    var prefix = this._levelPrefix('prefix');
    var msg = this._format(arguments);
    console.error(red(time,prefix, msg));
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


internals.Console.prototype.send = function (request, err) {
    var self = this;
    self.body = {};
    self.body.request = request;
    self.body.err = err;
    this.transporter = mailer.createTransport({
			service: this.service,
			auth: {
				user: this.auth.user,
				pass: this.auth.pass
			}
		});


		self.message = {
			from: this.from,

			// Comma separated list of recipients
			to: this.to,

      cc: this.cc,

			// Subject of the message
      subject: err,

			text: self.text || self.body
		};

		this.transporter.sendMail(self.message, function(err, info) {
			if (err) {
				self.error('Error occurred');
				self.error(err.message);
				return err;
			}
			self.info('Message sent successfully!');
			self.info('Server responded with "%s"', info.response);
      return info;
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
