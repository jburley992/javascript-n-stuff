var app = require("express");
var request = require("request");
//make a request to google.com
request("http://www.google.com",function(error, response,body){
    //Error: holds any potential error such as no internet, etc.
    //Status code 200 indicates everything is okay and we successfully recieved a response

    //These 2 things should always be checked
    if(!error && response.statusCode == 200){
        console.log(body);
    }
    else{
        console.log("Something went wrong");
        console.log(error);
    }
});