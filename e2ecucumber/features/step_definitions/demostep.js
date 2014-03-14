var stepDefs = function () {
    var Given = When = Then = this.defineStep;
   
    /**
        ** require files 
        ** world initiates the cucumber worls
        ** pageOBjectFactory initiates the pageOBject for a particular view
        ** page object service to perform URl loading and element actions
    **/
    
    this.World = require("../support/world.js").World;
    var pageObjFactory      =   require("../../PageObjects/pageObjectFactory.js");
    var pageObjService      =   require("../../PageObjects/pageObjectService.js");
    var pageObjModel        =   require("../../pageObjectModel/loginPOModel.js");
    

    /***
        **Scenario 1 login steps 
    ***/
    
    this.Given(/^login$/, function(callback) {
        /**
            ** Url Handler method to load the provided URL
        **/
       pageObjService.urlHandler("http://localhost:8888/e2edemo/login.html",callback);
    });

    this.When(/^Login loads enter user name$/, function(callback) {
        /**
            ** Use page object factory to generate username page object
        **/
        pageObject  =   pageObjFactory.genPageObject(pageObjModel,"txtUsername","enterText","username");//Generates page object with element id,action and value as the parameters
        /**
            ** Use page object service to trigget page Object action 
        **/
        pageObjService.triggetAction(pageObject,callback); //perfroms page object action 
            
      
    });

    this.When(/^password$/, function(callback) {
     /**
        ** Use page object factory to generate password page object
     **/
     
     pageObject  =   pageObjFactory.genPageObject(pageObjModel,"txtPassword","enterText","password");//Generates page object with element id,action and value as the parameters
         /**
            ** Use page object service to trigget page Object action 
        **/
     pageObjService.triggetAction(pageObject,callback); //perfroms page object action 
    
    });

    this.Then(/^submit$/, function(callback) {
    /**
        ** Use page object factory to generate submit button page object
     **/    
     pageObject  =   pageObjFactory.genPageObject(pageObjModel,"btnSubmit","click",null);//Generates page object with element id,action and value as the parameters
         /**
            ** Use page object service to trigget page Object action 
        **/
     pageObjService.triggetAction(pageObject,callback); //perfroms page object action 
     
    });
   
 
}

module.exports = stepDefs;
