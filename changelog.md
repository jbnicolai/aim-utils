##Changelog

v1.0.0 - initial release, prepare for npm publishing for improved installation.  Console constructor function can log date and time with moment, in colour with chalk and format as message using util.format from nodejs.  The stop nodejs function is disabled as will crash node unless implemented in aimSvr

v1.0.1 - update readme

v1.0.2 - fix readme for npm

v1.0.3 - final fixes to readme

v1.0.4 - fixed format for npm

v1.0.5 - tidy up example

v1.0.6 - changed formatting of console

v1.0.7 - fixed returns of functions due to bug with incorrect order and times being displayed async and not sync order.  Added ability to pass as only option the moment format string to constructor function to tailor console time and date to users liking.

v1.0.8 - added debugMode options to silence console when set to false, object required to pass to constructor function to use.

v1.0.9 - added request method to class, prints output to console in green to view incoming requests to server

v1.10.0 - added nodemailer module to send errors from servers via email

v1.10.1 - added usage to readme and added more options for nodemailer

v1.10.2 - fixedtypo in readme

v1.10.3 - if timeDate option is omitted it removes message formatting and prints pure text, removed nodemailer options (new module will be created to handle this).  Fixed bug with request method not working.  Todo tidy up stop nodejs function to be stand alone fucntion not bound to hapi method

v1.10.4 - removed nodemailer package from package.json file, fixed bug with debug method not being silenced correctly - either completely omit from config options or set to false to silence debug messages to console

v1.10.5 - fixed issue with console file making a require for not used nodemailer, this caused npm problems installing package - updated npm repo as well.

v1.10.6 - fixed bug in warn method

v1.10.7 - changed exported module to allow better external consumption
