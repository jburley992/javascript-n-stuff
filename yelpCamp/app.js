var express = require("express");
var app = express();
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/yelp_camp")
//body-parser is required to be able to 
// get data from the body of a form
var bp = require("body-parser");
app.use(express.static("public"));

//IMPORTANT
app.use(bp.urlencoded({extended:true}));


var CampGroundSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String
})

var CampGround = mongoose.model("Campground", CampGroundSchema);




app.get("/",function(req,res){
    res.render("home.ejs");
});

//Index
app.get("/campgrounds",function(req,res){
    CampGround.find({},function(err,campgrounds){
        if(err){console.log(err);}
        else{
            res.render("index.ejs", {cg:campgrounds})
        }
    })
    
});

//New
app.get("/campgrounds/new",function(req,res){
    res.render("newCampGround.ejs");
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
    CampGround.findById(req.params.id,function(err,foundCG){
        if(err){console.log(err);}
        else{
            res.render("show.ejs",{campground: foundCG});
        }
    })
});


app.listen(3000,function(){
    console.log("server started");
});