const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const clearFunction = () => {
    clearInterval(myInterval);
}

const timerFunction = () => {
    if (parseInt(second.innerHTML) === 0) {
        if (parseInt(minute.innerHTML) === 0) {
            minute.innerHTML = 60;
            hour.innerHTML = parseInt(hour.innerHTML) - 1;
            if (parseInt(hour.innerHTML) === 0) {
                hour.innerHTML = 23;
                day.innerHTML = parseInt(day.innerHTML) - 1;
                if (parseInt(day.innerHTML) === -1) {
                    clearFunction();
                    second.innerHTML = 0;
                    minute.innerHTML = 0;
                    hour.innerHTML = 0;
                    day.innerHTML = 0;
                    return;
                }
            }
        }
        second.innerHTML = 60;
        minute.innerHTML = parseInt(minute.innerHTML) - 1;
    }
    second.innerHTML = parseInt(second.innerHTML) - 1;
}

const myInterval = setInterval(timerFunction, 1000);