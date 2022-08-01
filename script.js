var timeEl = document.getElementById("time");

var startBtn = document.getElementById("start");


var startTime = 60;


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