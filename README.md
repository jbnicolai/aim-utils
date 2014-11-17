# aim-utils

### About module

This project is currently a console logger with datetime, colours and loglevels.
It uses 'util.format' to space strings, objects, arrays and integers without the need to format.

### Goals

The project will have the following targets;

+ Add methods for enabling and disabling logging to console for production environments
+ The ability to write logs to physical file within local file system when console is disabled
+ Pass configurable options to constructor function to accept different properties - colours, levels, time & date format and silence console
+ Write test cases to ensure 100% test code coverage

## Getting Started

Install the module with
````bash
 `npm install aim-utils`


````

### Examples

```javascript
var Console = require('aim-utils');
var options = {
  timeDate: 'YYYY MM DD HH:mm:SSS', // moment.js time date string format
  debugMode: true, // set to false to silent printing of debug messages to console
  service: 'Mandrill',  // valid nodemailer options for provider with auth user and pass for accessing api
  auth: {
    user: 'myusername',
    pass: 'api-key'
  },
  from: '"Sender Name" <test@example.com>',
  to: '"Sender Name" <test@example.com>',
  cc: '"Sender Name" <test@example.com>',
  body : 'This is a test body'


};  

var AimUtils = new Console(options);

var object = {a:1, b:2}
var array =['a', 'b', 'c'];


AimUtils.info('This', 'is', 'an', 'info', 'message', object, array);
// This is an info message {a:1, b:2} ['a', 'b', 'c']
AimUtils.warn('This', 'is', 'a', 'warning', 'message', object, array);
// This is a warning message {a:1, b:2} ['a', 'b', 'c']
AimUtils.debug('This', 'is', 'a', 'warning', 'message', object, array);
// This is a warning message {a:1, b:2} ['a', 'b', 'c']
AimUtils.error('This', 'is', 'an', 'error', 'message', object, array);
// This is an error message {a:1, b:2} ['a', 'b', 'c']
AimUtils.fatal('This', 'is', 'an', 'fatal', 'message', object, array);
// This is a fatal message {a:1, b:2} ['a', 'b', 'c']

Aim.Utils.send()
// Sends a email via nodemailer based upon configuration passed to constructor.

```

<!---
## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Gulp](http://gulpjs.com/).

## Release History
_(Nothing yet)_

--->

### Release History
See the changelog for details

### License
Copyright (c) 2014 Circa Business Solutions Ltd [Circa Business Solutions Ltd](http://circabs.com/)
Licensed under the MIT license.
