var p1Score = 0;
var p2Score = 0;
var ScoreToWin = 5;


var p1ScoreText = document.querySelector("#p1S");
var p2ScoreText = document.querySelector("#p2S");


var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var turnsText = document.querySelector("#numTurns");

var input_ = document.querySelector("input");
var gameOver = false;

function resetGame(){
    p1Score = 0;
    p2Score = 0;
    p1ScoreText.textContent = p1Score;
    p2ScoreText.textContent = p2Score;
    p1ScoreText.classList.remove("green");
    p2ScoreText.classList.remove("green");
    gameOver = false;
}

    resetButton.addEventListener("click",function(){
        resetGame();
    })

    p1Button.addEventListener("click", function(){
        if(!gameOver){
            p1Score = p1Score + 1;
            if(p1Score === ScoreToWin){
                gameOver = true;
                p1ScoreText.classList.add("green")
                
            }
            p1ScoreText.textContent = p1Score;
        }
    });

    p2Button.addEventListener("click", function(){
        if(!gameOver){
            p2Score = p2Score + 1;
            if(p2Score === ScoreToWin){
                gameOver = true;
                p2ScoreText.classList.add("green");
            }
           p2ScoreText.textContent = p2Score;
        }
    });
    //change event runs anytime you change the input
    input_.addEventListener("change",function(){
        // "this" is the same as input_, this works inside of
        // .addEventListener
        ScoreToWin = Number(this.value);
        turnsText.textContent = ScoreToWin;
        resetGame();

    })

//Types of events:
//click, change,
// mouseover: hover event that turns on event
// mouseout: hover event that turns off an event
