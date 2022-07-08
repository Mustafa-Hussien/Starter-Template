const buttonStart = document.querySelector('.btn-start'),
    buttonStop = document.querySelector('.btn-stop'),
    buttonReset = document.querySelector('.btn-reset');
let timeSpan = document.querySelector('.time'),
    stopTime = true;

let sec = 0,
    min = 0,
    hr = 0;

buttonStart.addEventListener('click', startTimer);
buttonStop.addEventListener('click', stopTimer);
buttonReset.addEventListener('click', resetTimer);

function stopTimer() {
    stopTime = true;
}

function startTimer() {
    setTimeout(function () {
        if (stopTime == true) {
            stopTime = false;
            timerCycle()
        }
    }, 1000)
}

function timerCycle() {
    if (stopTime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timeSpan.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout(timerCycle, 1000);
    }
}

function resetTimer() {
    timeSpan.innerHTML = '00:00:00';
    stopTime = true;
    hr = 0;
    sec = 0;
    min = 0;
}