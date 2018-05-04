//thewdb
// %20 ====" " in a querystring
var express = require("express");
var bp = require("body-parser");
var request = require("request");
var app = express();
app.use(express.static("public"));
app.use(bp.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/results",function(req,res){
    var query = req.query.search;
    console.log(query);
    request("http://www.omdbapi.com/?apikey=thewdb&s=" + query, function(error,response,body){
        if(!error){
            var data = JSON.parse(body)
            console.log(data);
            res.render("results.ejs",{data:data})
        }
    }
    );
});







app.listen(3000,function(){
    console.log("Server Started");
})


