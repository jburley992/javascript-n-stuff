// Add/remove/toggle css classes for an html document
// classlist.toggle()
// classlist.remove()
// classlist.add()
var body = document.querySelector("body");
body.addEventListener("click", function(){body.classList.toggle("bg_color_pink")} );

// document.queryselector("datum")
// Will return the first object of type datum
// You can use #id_name, to select an element by its id.
var par = document.querySelector("p");

par.style.backgroundColor = "purple";

function changeBGColor(color_){
    this.style.backgroundColor = color_;
}
// document.getElementsByTagName("tag")[?]
// Will yield a list containing all of the elements
// of a specific tag on one page

// tag.innerHTML
// This is a member variable of the tag object that 
// represents all the html code enclosed in the tags

// tag.textContent will do the same thing, except it will
// only get text, not tags like <strong></strong>

//item.setAttribute("tag", attribute)
// Useful for changing the href/src of an element
// ex. changing a picture on a site.

//Events:
//Clicking a button
// Drag and drop
// Pressing a key
// -- To enable events, we must add event listeners to objects, like so:
var button = document.querySelector("button");
var isMich = false;
button.addEventListener("click",function() {
    if(isMich)
    document.querySelector("img").setAttribute("src",
    "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkevinomarah%2Ffiles%2F2016%2F02%2FScreen-Shot-2016-02-12-at-10.18.58-pm1.jpg");
    else{
        document.querySelector("img").setAttribute("src","http://research.physics.lsa.umich.edu/Li-Lab/michigan-logo.jpg");
    }
    isMich = !isMich;
    }
);
//Aditionally, you can add listeners to multiple objects using 
//looping

var list_of_headers = document.querySelectorAll("h2");
for(var d = 0; d< list_of_headers.length; ++d){ console.log(list_of_headers[d]);}
for(var i =0; i < list_of_headers.length; ++i){
    list_of_headers[i].addEventListener("click",
    function (){
        this.style.backgroundColor = "red";
    }
);
}
