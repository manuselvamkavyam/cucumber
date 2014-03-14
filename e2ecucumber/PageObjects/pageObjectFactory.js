/*
** Page object factory, class to generate page object for each element
** 
*/
var pageObjFactory=  {  
     
    genPageObject :function(pageObjectModel,elementid,action,value) {
        
        var elements                =   pageObjectModel.elements;
       
        pageObject                  =   new Object;
        pageObject.status           =   false;
        pageObject.elementid        =   null;
        pageObject.action           =   null;
        pageObject.value            =   null;
        
        retval=this.key_exists('id',elementid,elements); 
        
        if(retval){
            
            pageObject.status       =   true;
            pageObject.elementid    =   elementid;
            pageObject.action       =   action;
            pageObject.value        =   value;
            
        }
        
        return pageObject;
       
    },
    
    /**
        **Traverse through pageObjectModel : Returns boolean 
    **/
    key_exists : function (key,value,search) {
        var retval  =   false;
        if (!search || (search.constructor !== Array && search.constructor !== Object)) {
           
            return retval;
        }
        for(i=0;i<search.length;i++) {
                obj=search[i];
                  if(obj.hasOwnProperty(key)){
                     if (obj[key] == value){
                            return true;
                     }else{
                         retVal=false;
                     }
                  }else{
                      retval=false;
                  }
            
         }            
           return retval;
    }
     
};

module.exports = pageObjFactory;