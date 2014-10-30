# aim-utils

### About module

+ This project is currently a console logger with datetime, colours and basic formatting

### Goals

The project will have the following targets;

+ Add methods for enabling and disabling logging to console for production environments
+ The ability to write logs to physical file within local file system when console is disabled
+ Pass configurable options to constructor function to accept different properties - colours, levels, time & date format and silence console
+ Write test cases to ensure 100% test code coverage

### Installation



````bash
npm install aim-utils

````


<!---
###aim-utils for aimSvr


## Getting Started
Install the module with: `npm install AimUtils`

```javascript
var Console = require('aim-utils');
var AIMUtils = new Console();
```


## Documentation
_(Coming soon)_

--->

### Examples

```javascript
var Console = require('aim-utils');
var AimUtils = new Console();

AimUtils.info('This', 'is', 'an', 'info', 'message', object, array); \\ This is an info message
AimUtils.warn('This', 'is', 'a', 'warning', 'message', object, array); \\ This is a warning message
AimUtils.error('This', 'is', 'an', 'error', 'message', object, array); \\ This is an error message
AimUtils.fatal('This', 'is', 'an', 'fatal', 'message', object, array); \\ This is a fatal message
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
