//These two statements do the same thing

//jQuery
$("li").css("background-color","black");

//$("object") == querySelectorAll
//$("ul li a") ---- This will select all anchor tags inside of an li, inside of a ul
//This can also be used for classes and id's

//.css(property, attribute)


//plain javascript
var li_s = document.querySelectorAll("li");
for(var i = 0; i < li_s.length; ++i){
    li_s[i].style.backgroundColor = "black";
}


//jQuery
var styles_ = {
    backgroundColor: "red",
    color: "yellow",
    border: "2px solid #12fff0"

}
$("ul").css(styles_);

$("div").css("background-color","purple");
$(".highlight").css("width", "200px");
$("#third").css("border","6px solid orange");
$("div:first-of-type").css("color", "pink");
// jQuery is an object, and will have a value of true logically,
// iff it is initialized