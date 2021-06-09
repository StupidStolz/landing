const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const NewYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(NewYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}
// it's add 0 to 01-09 sec/mins etc.
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
//console.log(days, hours, mins, seconds) //testing numbers

// initial call
countdown();
setInterval(countdown, 1000);


document.querySelector('button').onclick = validate;
function validate() {
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    if (name=='') {
        alert('Необходимо заполнить имя!')
    } else if (mail=='') {
        alert('Необходимо заполнить E-mail!')
    } else confirm('your name is ' + name + ' and email is ' + mail);
    console.log(name + mail);
}

