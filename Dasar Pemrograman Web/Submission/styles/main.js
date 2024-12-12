// TIMER SECTION 

var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('pause');

var wm = document.getElementById('w-minutes');
var ws = document.getElementById('w-seconds');

var bm = document.getElementById('b-minutes');
var bs = document.getElementById('b-seconds');

var counter = document.getElementById('counter');

var start_timer;


start.addEventListener('click', function() {
    if(start_timer == undefined) {
        start_timer = setInterval(timer, 1000);
    } else {
        alert('Timer is already running');
    }
})

reset.addEventListener('click', function() {
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    counter.innerText = 0;

    stop_timer();
    start_timer = undefined;
})

stop.addEventListener('click', function() {
    stop_timer();
    start_timer = undefined;
})

//start timer
function timer() {

    // Work Timer 
    if(ws.innerText != 0) {
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        wm.innerText--;
        ws.innerText = 59;
    }

    // Break Timer
    if(wm.innerText == 0 && ws.innerText == 0) {
        if(bs.innerText != 0) {
            bs.innerText--;
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bm.innerText--;
            bs.innerText = 59;
            
        }
    }

    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        counter.innerText++;
    }
}

//stop timer 
function stop_timer() {
    clearInterval(start_timer);
}


// TO DO SECTION 

const input_todo = document.getElementById('input-todo');
const list_container = document.getElementById('list-container');

function AddTask() {
    if(input_todo.value === '') {
        alert('Your task is empty, please write your task');
    } else {
        let li = document.createElement("li");
        li.innerHTML = input_todo.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    input_todo.value = "";
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }

})