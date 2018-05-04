// Certain things that exist in web developement
// (document, alert(), DOM/Eventlisteners etc.) do not exist in node js
// and are bundled with browsers instead 

console.log("hello world");
var catMe = require("cat-me");
var faker = require("faker");

for(var i =0; i < 10; ++i){
    var item = faker.commerce.product();
    var price = faker.commerce.price();
    console.log(item + ": " + price); 
}