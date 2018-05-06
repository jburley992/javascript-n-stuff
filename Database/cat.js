//Mongoose allows us to interact with mongoDB via javascript
var mongoose = require("mongoose");

//Connects to a database, if the database doesn't exist, a new database will
// be created
mongoose.connect("mongodb://localhost/cat_app");


//Defines what a cat should look like, we must keep in mind
// that because this is a non-relational database, a cat does
// not have to have these specific features
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    Temperment: String
});
//Cat can be used to perform CRUD operations on dbs (Create,remove,update,delete)

//First argument should always be singular version of the collection that your library 
// should be representing, cat--> cats, person --> people, etc.
var Cat = mongoose.model("Cat", catSchema);





// var George = new Cat({
//     name: "Angel",
//     age: 11,
//     Temperment: "evil"
// });

// George.save(function(err,cat){
//     if(err){console.log("Something Went Wrong")}
//     else{
//         console.log("We just saved a cat");
//         console.log(cat);
//     }
// });

//Will define and add a cat to the database in one step

Cat.create({
    name: "Chucky",
    age: 12,
    Temperment: "angry"
}, function (err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function (err, cat) {
    if (err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});