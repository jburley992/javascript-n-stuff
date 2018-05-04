var express = require("express");
var app = express();


//Get request for the root path of our app

//request and response are objects:
//Request: Contains information about what was asked for
//Response:Contains information about what we are responding with
app.get("/",function(req,res){
    res.send("hi there");
});

app.get("/bye",function(req,res){
    res.send("Goodbye");
});

app.get("/dog",function(req,res){
    res.send("meow");
});

//Using the colon in a querystring enables you to create patterns that genericaly,
//and dyanmically create routes, any route matching the following format will trigger
//this callback funciton.

app.get("/bye/:something",function(req,res){
    //Params is a dictionary/map that takes in keys of teh variables that a wabpage can 
    //be sent: "/bye/:something/:something_else"
    //Would have 2 parameters

    res.send("Welcome to the " + req.params["something"] + " page");
});

/*
Order of Routes matters, you want to have the root directory at the top, and things below that
lower in the hierarchy. '*' is a catch-all and  will always go to that page.
*/
app.get("*", function(req,res){
    res.send("Error, the address you are requesting does not exist.");
});
//Tell app to listen for incoming requests at port 3000, at my IP
//address
app.listen(3000,process.env.IP,function(){
    console.log("Server Started");
});

/*
    Package.json is a file that contains metadata for where the file is hosted, who contributed to it,
    and most importantly, what dependancies the file has
*/