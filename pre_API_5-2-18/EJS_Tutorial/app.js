var express = require("express");
var bp = require("body-parser");
var app = express();
//Tells express to use contents of public directory
app.use(express.static("public"));
app.use(bp.urlencoded({extended:true}));
//Tells express ahead of time that we are planning to
// use ejs files as teh view engine, whcih means
// we can leave ".ejs" off of file extensions
app.set("view engine", "ejs");
var friends = ["Tony","Thomas"];

app.get("/",function(req,res){
    res.render("home");
});

// app.get("/name/:user_name",function(req,res){
//     //Send an object to the file that contains
//     //variables sent from the user.
//     // , {user:req.params.user_name}
//     res.render("WhatIsName", {user:req.params.user_name});
// });

app.get("/friends",function(req,res){
    res.render("friends", {friends:friends});
});

app.post("/addFriend",function(req,res){
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
})


app.listen(3000,function(){
    console.log("Server Started");
});