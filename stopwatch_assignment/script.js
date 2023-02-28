let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let millisec = document.getElementById("millisec")

let startBtn = document.getElementById("startBtn")
let pauseBtn = document.getElementById("pauseBtn")
let resetBtn = document.getElementById("pauseBtn")
let castBtn = document.getElementById("castBtn")

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
    startBtn.disabled = true
    startTimer  = setTimeout(() => {
        milliSeconds++
        if(milliSeconds == 100){
          seconds++
          milliSeconds = 0
        }
        if(seconds == 60){
           minutes++
           seconds = 0
        }
        if(min == 60){
            hours++
            minutes = 0
        }
        millisec.innerText = milliSeconds
        sec.innerText = seconds
        min.innerText = minutes
        hrs.innerText = hours
        start()
    }, 1)
}

function pause(){
    clearTimeout(startTimer)
    startBtn.disabled = false
}

function reset(){
    milliSeconds = 0
    seconds = 0
    min = 0
    hours = 0
    clearTimeout(startTimer)
    millisec.innerText = "000"
    sec.innerText = "00"
    min.innerText = "00"
    hrs.innerText = "00"
    startBtn.disabled = false
}