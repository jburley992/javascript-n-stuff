var squares = document.querySelectorAll(".square");


// Will pick a number between 0 and 5 inclusive
for( var i = 0; i < squares.length; ++i){
    var red = Math.floor( Math.random() * 256 );
    var green =Math.floor(  Math.random() * 256 );
    var blue =Math.floor(  Math.random() * 256 );
    squares[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";

    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor === chosen){
        document.querySelector("#advice").style.color = "steelblue";
        document.querySelector("#advice").textContent = "You Win";
        document.querySelector("#reset").textContent = "Play again?"
        changeColors(chosen);

        }
        else{
            this.style.backgroundColor = "#232323";
            document.querySelector("#advice").style.color = "red";
            document.querySelector("#advice").textContent = "Try Again";
        }
    })

}
var colorToPick = Math.floor( Math.random() * 6 );
var chosen = squares[colorToPick].style.backgroundColor;
document.querySelector("h1").textContent = "A simple Color Game: " + chosen;



function changeColors(color){
    for(var i =0; i < squares.length; ++i){
        squares[i].style.backgroundColor = color;
    }
    document.querySelector("h1").style.backgroundColor = color;
    document.querySelector("h1").style.color = "#000000";

}


    document.querySelector("#reset").addEventListener("click",
    function(){
        for( var i = 0; i < squares.length; ++i){
            var red = Math.floor( Math.random() * 256 );
            var green =Math.floor(  Math.random() * 256 );
            var blue =Math.floor(  Math.random() * 256 );
            squares[i].style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
        }
        colorToPick = Math.floor( Math.random() * 6 );
        chosen = squares[colorToPick].style.backgroundColor;
        document.querySelector("h1").textContent = "A simple Color Game: " + chosen;
        this.textContent = "Reset Colors?";
        document.querySelector("h1").style.backgroundColor = "springgreen";
        document.querySelector("h1").style.color = "rgb(59, 57, 57)";



    });