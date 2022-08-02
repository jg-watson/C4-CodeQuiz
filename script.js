var timeEl = document.getElementById("time");

var startBtn = document.getElementById("start");


var startTime = 60;


var questions = [

    {
        question: "This performs a task or calculates a value in JS.",
        answer: "A Function",
        choices: ["An Array", "A Function", "A for loop"],
    }
];


function start() {
    
timeEl.textContent = startTime;

var timerId = setInterval(function() {
    startTime--;
   timeEl.textContent = startTime;

    if(startTime <=0) {
        clearInterval(timerId);
    }


}, 1000);

}


startBtn.addEventListener("click", start);
