const time = document.querySelector('.time');
const date = document.querySelector('.date');


function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    setTimeout(showTime, 1000);
}

showTime();

function showDate() {
    const newDate = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
    const currentDate = newDate.toLocaleDateString('en-EN', options);
    date.textContent = currentDate;
}






