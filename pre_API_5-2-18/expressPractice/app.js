var express = require("express");
var app = express();

function repeat_n_times(integer,string){
    var str = "";
    for(var i = 0; i < integer; ++i ){
        str += string;
        str += " ";
    }
    return str;
}

app.get("/",function(req,res){
    res.send("hi there, welcome to my assigment")
});

app.get("/speak/cow",function(req,res){
    res.send("The cow says moo");
});

app.get("/speak/pig",function(req,res){
    res.send("The pig says Oink");

});

app.get("/speak/dog",function(req,res){
    res.send("The dog says bark");
});

app.get("/repeat/:string/:integer",function(req,res){
    res.send(repeat_n_times(req.params["integer"],req.params["string"]));
});

app.get("*",function(req,res){
    res.send("Page not found");
})

app.listen(3000,function(){
    console.log ("Server Started");
});