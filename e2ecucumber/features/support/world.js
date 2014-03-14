//var expect = require('chai').expect;
//var assert = require('chai').assert;

//var elementHandler   = require("../../PageObjects/pageObjectElement.js");

//Init page object and its elements
//elementHandler.initPageObjects();

//elementHandler.getPageObjectElement("login");
 
var World = function World(callback) {
  
  console.log('Cucumber world called');
    
  callback(); // tell Cucumber we're finished and to use 'this' as the world instance
};
exports.World = World;