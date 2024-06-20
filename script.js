let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCounter = 1;

function startPause() {
    let startPauseButton = document.getElementById('startPause');

    if (startPauseButton.innerHTML === 'Start') {
        startPauseButton.innerHTML = 'Pause';
        timer = setInterval(runStopwatch, 10);
    } else {
        startPauseButton.innerHTML = 'Start';
        clearInterval(timer);
    }
}

function runStopwatch() {
    milliseconds++;
    if (milliseconds / 100 === 1) {
        milliseconds = 0;
        seconds++;
        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
        }
    }

    document.getElementById('minutes').innerHTML = padTime(minutes);
    document.getElementById('seconds').innerHTML = padTime(seconds);
    document.getElementById('milliseconds').innerHTML = padMilliseconds(milliseconds);
}

function padTime(time) {
    return (time < 10 ? '0' : '') + time;
}

function padMilliseconds(milliseconds) {
    return (milliseconds < 10 ? '00' : milliseconds < 100 ? '0' : '') + milliseconds;
}

function lapReset() {
    let lapResetButton = document.getElementById('lapReset');
    let lapList = document.getElementById('lapList');

    if (lapResetButton.innerHTML === 'Lap') {
        let lapTime = padTime(minutes) + ':' + padTime(seconds) + '.' + padMilliseconds(milliseconds);
        let lapItem = document.createElement('li');
        lapItem.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
        lapList.appendChild(lapItem);
        lapCounter++;
    } else {
        clearInterval(timer);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        lapCounter = 1;
        lapList.innerHTML = '';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
        document.getElementById('milliseconds').innerHTML = '000';
        document.getElementById('startPause').innerHTML = 'Start';
    }
}

function reset() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapCounter = 1;
    let lapList = document.getElementById('lapList');
    lapList.innerHTML = '';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
    document.getElementById('milliseconds').innerHTML = '000';
    document.getElementById('startPause').innerHTML = 'Start';
}
