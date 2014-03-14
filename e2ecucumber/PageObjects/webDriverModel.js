/*    
   **Class to handle web drivers
*/

var webdriver       = require('selenium-webdriver'),
SeleniumServer      = require('selenium-webdriver/remote').SeleniumServer;
pathToSeleniumJar   = '/Users/f551152/Documents/github/e2e/selenium-server-standalone-2.39.0.jar';

var server = new SeleniumServer(pathToSeleniumJar, {
  port: 4444
});

server.start();

var driver = new webdriver.Builder().usingServer(server.address()).withCapabilities(webdriver.Capabilities.chrome()).build();

var driverHandler=  {
     getWebdrier  : function(){
         return webdriver;
    },
    getBrowser: function () {
           return driver;
    }

};


module.exports = driverHandler;