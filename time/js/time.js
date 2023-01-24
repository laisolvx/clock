const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let second = dateToday.getSeconds();

    if (hr < 10) String(hr).padStart(2, '0');

    if (min < 10) min = '0' + min;

    if (second < 10) String(second).padStart(2, '0');

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = second;
})