/*
** Page object handler, class to check the existance of a page object
** It instanciate the web driver here
*/

var actionHandler        =   require("./pageObjectAction.js");
var driverHandler        =   require("./webDriverModel.js");
var browser              =   driverHandler.getBrowser();
var webdriver            =   driverHandler.getWebdrier();


var pageObjHandler=  {  
    triggetAction : function (pageObject,callback){
        //console.log(action);
        if(pageObject.status){
       
            if(pageObject.action == "enterText"){
                actionHandler.enterText(pageObject.elementid,pageObject.value,browser,webdriver,callback);
            } else if(pageObject.action =="click")
                actionHandler.clickButton(pageObject.elementid,browser,webdriver,callback);
        } else {
            console.log("Element not found");
        }
        
        
    },
    urlHandler : function(url,callback){
     
        browser.get(url).then(function(){
          //console.log(url+" loaded");
           callback();
       }, function(err) {
                if (err.state && err.state === 'no such element') {
                    console.log('Url not found');
                } 
            });
     
       // callback();
      
    }
};

module.exports = pageObjHandler;