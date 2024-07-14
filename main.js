function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);

    return {
        total,
        minutes,
        seconds
    };
}

function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const minutesDiv = clock.querySelector('.minutes');
    const secondsDiv = clock.querySelector('.seconds');

    function updateClock() {
        const timerObj = getTimeRemaining(endtime);

        minutesDiv.innerHTML = ('0' + timerObj.minutes).slice(-2);
        secondsDiv.innerHTML = ('0' + timerObj.seconds).slice(-2);
        
        timerObj.total <= 0 && clearInterval(timeinterval);
    }
    updateClock();

    const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 87 * 1000); // 1 min 27 sec
initializeClock('timer', deadline);