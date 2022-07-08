const buttonStart = document.querySelector('.btn-start'),
    buttonStop = document.querySelector('.btn-stop'),
    buttonReset = document.querySelector('.btn-reset');
let timeSpan = document.querySelector('.time'),
    stopTime = true;

let sec = 0,
    min = 0,
    hr = 0;

buttonStart.addEventListener('click', stopTime = false)
buttonStop.addEventListener('click', stopTime = true)

function timerCycle() {
    if (stopTime = false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec += 1;
        if (sec < 10) {
            sec = '0' + sec;
        } else if (sec === 60) {
            sec = 0;
            min += 1;
        }

        if (min < 10) {
            min = '0' + min;
        } else if (min === 60) {
            min = 0;
            hr += 1;
        }

        if (hr < 10) {
            hr = '0' + hr;
        }

        setTimeout(timerCycle, 1000);
        timeSpan.innerHTML = `${hr}:${min}:${sec}`
    }
}
