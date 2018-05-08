var express = require("express");
var app = express();

var mongoose = require("mongoose");
var mo = require("method-override");
var bp = require("body-parser");
var expressSanitizer = require("express-sanitizer");
app.use(express.static("public"));
app.use(bp.urlencoded({ extended: true} ) );
app.use(expressSanitizer());
app.use(mo("_method"));
mongoose.connect("mongodb://localhost/blogs");


var blogSchema = new mongoose.Schema({
    title: String,
    img: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});

var Blog = mongoose.model("Blog", blogSchema);

//created a single blog
// Blog.create({
//     title:"My first blog post",
//     img:"https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg",
//     body: "Hello World has traditionally been the first program that someone will write when they are trying to learn a new language, furthermore it was the first program I wrote and i will often use it as a placeholder when I need to Insert a title or a paragraph into a project that has not yet been deeloped"

// },function(err,blog){
//     if(err){console.log(err);}
//     else{
//         console.log(blog);
//     }
// });

//Restful Routes below


app.get("/",function(req,res){
    res.render("home.ejs");
})

app.get("/blogs", function (req, res) {
    Blog.find({}, function (err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index.ejs",{blogs:blogs});
        }
    })
});

app.post("/blogs",function(req,res){
    req.body.post_body =  req.sanitize(req.body.post_body);
   Blog.create({
       title:req.body.title,
       body:req.body.post_body,
       img:req.body.img
   },function(err,blog){
       if(err){console.log(err);}
       else{
           console.log(blog);
       }
   })
    res.redirect("/blogs");
});

app.get("/blogs/new",function(req,res){
    res.render("new.ejs");
});

app.get("/blogs/:id",function(req,res){
    Blog.findById(req.params.id,function(err,blog){
        if(err){console.log(err);}
        else{
            res.render("blog.ejs",{blog:blog});
        }
    });
});

app.put("/blogs/:id",function(req,res){
    req.body.post_body =  req.sanitize(req.body.post_body);
    Blog.findByIdAndUpdate(req.params.id,
        {title:req.body.title,
         body: req.body.post_body,
         img:  req.body.img},function(err,updatedBlog){
            if(err){console.log(err);}
            else{
                res.redirect("/blogs/" + req.params.id);
            }
         })
});

app.delete("/blogs/:id",function(req,res){
    Blog.findByIdAndRemove(req.params.id,function(err){
        if(err){console.log(err)};
    });
    res.redirect("/blogs");
});

app.get("/blogs/:id/edit",function(req,res){
    Blog.findById(req.params.id,function(err,blog){
        if(err){console.log(err);}
        else{
            res.render("edit.ejs",{blog:blog});
        }
    });
});

app.listen(3000, function () {
    console.log("Server Started");
});