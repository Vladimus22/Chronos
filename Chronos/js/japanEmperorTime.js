let 令和 = new Date("2019-05-01");

function howLong() {
    let currentTime = new Date();

    let timeBeetwenDatesInMs = currentTime - 令和;

    let days = Math.floor(timeBeetwenDatesInMs / 1000 / 60 / 60 / 24);
    let hours = Math.floor(timeBeetwenDatesInMs / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(timeBeetwenDatesInMs / 1000 / 60) % 60;
    let seconds = Math.floor(timeBeetwenDatesInMs / 1000) % 60;
    console.log(days);
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

setInterval(howLong, 1000);