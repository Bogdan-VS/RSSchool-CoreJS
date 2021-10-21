const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');


document.addEventListener('DOMContentLoaded', getWeather);

city.addEventListener('change', function() {
    getWeather(weatherIcon, temperature, weatherDescription, wind, humidity);
})

async function getWeather(weatherI, tempT, descriptW, currentWind, currentHumidity) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=79fae8ffef4cccb446d778bafa6c9c33&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    weatherI.className = 'weather-icon owf';
    weatherI.classList.add(`owf-${data.weather[0].id}`);
    tempT.textContent = `${Math.floor(data.main.temp)}°C`;
    descriptW.textContent = data.weather[0].description;
    currentWind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    currentHumidity.textContent = `Humidity: ${data.main.humidity}%`;
}

getWeather(weatherIcon, temperature, weatherDescription, wind, humidity);

function setLocalStorage() {
    localStorage.setItem('city', city.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    }
}

window.addEventListener('load', getLocalStorage);