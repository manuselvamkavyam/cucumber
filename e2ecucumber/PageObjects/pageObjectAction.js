/*
** Class to handle actions
**
*/
 var actionHandler=  {
     enterText  : function(key,value,browser,webdriver,callback){
         //console.log("perform the action")
        var element    =   browser.findElement(webdriver.By.id(key));
        
         element.sendKeys(value).then(function() {
            //callback();
             console.log(value+ " entered");
             setTimeout(
             callback()
                 ,3000);
        });
        
    },
    clickButton: function (key,browser,webdriver,callback) {
        
         var element =   browser.findElement(webdriver.By.id(key));
         
            element.click().then(function() {
             console.log(key+ " clicked");
             callback();
        });
    }

};

module.exports = actionHandler;