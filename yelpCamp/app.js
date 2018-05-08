var express = require("express");
var app = express();
var mongoose = require("mongoose");
var CampGround = require("./models/campground");
// var User = require("./models/user");
var Comment = require("./models/comment");
var seedDB = require("./seedDB");


mongoose.connect("mongodb://localhost/yelp_camp")
//body-parser is required to be able to 
// get data from the body of a form
var bp = require("body-parser");
app.use(express.static("public"));

//IMPORTANT
app.use(bp.urlencoded({extended:true}));

app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
    res.render("home.ejs");
});

//Index
app.get("/campgrounds",function(req,res){
    CampGround.find({},function(err,campgrounds){
        if(err){console.log(err);}
        else{
            res.render("campgrounds/index.ejs", {cg:campgrounds})
        }
    })
    
});

//New
app.get("/campgrounds/new",function(req,res){
    res.render("campgrounds/newCampGround.ejs");
});


//Create
app.post("/campgrounds",function(req,res){
    // Get data from form, add to campgrounds array, refresh
    var newCG = {
        name: req.body.newCG,
        img: req.body.img_url,
        description: req.body.description_
    }
    CampGround.create(newCG,function(err,campground){
        if(err){console.log(err);}
        else{
            console.log(campground);
        }
    });
    res.redirect("/campgrounds");
})

//Show
//find campground with "id" and show info about it
app.get("/campgrounds/:id",function(req,res){
    //This method will turn references into the objects that they represent
    CampGround.findById(req.params.id).populate("comments").exec(function(err,foundCG){
        if(err){console.log(err);}
        else{
            res.render("campgrounds/show.ejs",{campground: foundCG});
        }
    })
});
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.get("/campgrounds/:id/comments/new",function(req,res){
    CampGround.findById(req.params.id,function(err,campground){
        if(err){res.redirect("/");}
        else{
            res.render("comments/new.ejs",{campground:campground});
        }
    })
});

app.post("/campgrounds/:id/comments",function(req,res){
    CampGround.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
        }else{
            Comment.create(req.body.comment,function(err,comment){
                if(err){
                    console.log(err);
                }
                campground.comments.push(comment);
                campground.save();
                res.redirect("/campgrounds/" + campground._id)
            })
        }
    });
});


app.listen(3000,function(){
    console.log("server started");
});