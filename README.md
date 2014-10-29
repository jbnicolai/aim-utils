# aim-utils for aimSvr

### About module

+ This project is currently a console logger with datetime, colours and basic formatting.
+ Future releases to improve methods for starting and stopping logging for production environments plus the ability to write log to physical file when console is disabled.
+ Ability to pass options to constructor function to accept different properties and configurations.  Also testing and more configuration options to follow with API docs.

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

AimUtils.info('This', 'is', 'an', 'info', 'message', object, array);
AimUtils.warn('This', 'is', 'an', 'info', 'message', object, array);
AimUtils.error('This', 'is', 'an', 'info', 'message', object, array);
AimUtils.fatal('This', 'is', 'an', 'info', 'message', object, array);
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
