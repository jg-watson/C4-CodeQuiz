//variables
var questions = 0;
var time = questions.length * 15;

// DOM elements
var startBtn = document.getElementById("start");
var timeEl = document.getElementById("time");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var scoreEl = document.getElementById("score");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");



var startTime = 60;



function start() {
    
timeEl.textContent = startTime;

var timerId = setInterval(function() {
    startTime--;
   timeEl.textContent = startTime;

    if(startTime <= 0) {
        clearInterval(timerId);
    }


}, 1000);

}


startBtn.addEventListener("click", start);
