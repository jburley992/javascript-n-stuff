var mongoose = require("mongoose");

var CampGroundSchema = new mongoose.Schema({
    name: String,
    img: String,
    description: String,
    comments: [
        {
            //Tells the interpreter that we want to have an
            // array filled with references to Comments
           type: mongoose.Schema.Types.ObjectId,
           ref: "Comment"
        }
     ]
})

var CampGround = mongoose.model("Campground", CampGroundSchema);

module.exports = CampGround;