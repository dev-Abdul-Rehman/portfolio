// let startButton = document.getElementById("startbtn");
// let stopButton = document.getElementById("stopbtn");
// let resetButton = document.getElementById("resetbtn");
let hours = 0;
let minutes = 0;
let seconds = 0;
let millisecond = 0;


let timer = false;
function startBtn(){
    timer = true;
    displayTime()
}
function stopBtn(){
    timer = false;

}
function resetBtn(){
    timer = false;
    hours = minutes = seconds = millisecond = 0
    document.getElementById("hours").innerHTML = `00`
    document.getElementById("Mins").innerHTML = `00`
    document.getElementById("secs").innerHTML = `00`
    document.getElementById("millisec").innerHTML = `00`
}

function displayTime(){
    if(timer == true){
        millisecond++;
        if(millisecond == 100){
            seconds++;
            millisecond = 0;
        }
        if(seconds == 60){
            minutes++;
            seconds = 0;
        }
        if(minutes == 60){
            hours++;
            minutes = 0;
            seconds = 0;
        }
        let hrstr = hours;
        let minstr = minutes;
        let secstr = seconds;
        let msecstr = millisecond;
        if(hours < 10){
            hrstr = `0${hours}`
        }
        if(minutes < 10){
            minstr = `0${minutes}`
        }
        if(seconds < 10){
            secstr = `0${seconds}`
        }
        if(millisecond < 10){
            msecstr = `0${millisecond}`
        }
        document.getElementById("hours").innerHTML = hrstr;
        document.getElementById("Mins").innerHTML = minstr;
        document.getElementById("secs").innerHTML = secstr;
        document.getElementById("millisec").innerHTML = msecstr

        setTimeout("displayTime()",10)


    }

}
