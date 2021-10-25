
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

const SERVER_ERROR = 'server is not available';
const errorInput = document.querySelector('.weather-error');


document.addEventListener('DOMContentLoaded', getWeather);

city.addEventListener('change', function() {
    getWeather(weatherIcon, temperature, weatherDescription, wind, humidity);
})

async function getWeather(weatherI, tempT, descriptW, currentWind, currentHumidity) {

    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=79fae8ffef4cccb446d778bafa6c9c33&units=metric`;
    let data;

    try {
        const res = await fetch(url);
        data = await res.json();
    } catch (e) {
        setErrorMessage(SERVER_ERROR)
    }
    
    if (data.cod === '404' || data.cod === '400') {
        setErrorMessage(data.message);  
    } else {
        errorInput.innerHTML = '';
        weatherI.style.display = 'block';
        weatherI.className = 'weather-icon owf';
        weatherI.classList.add(`owf-${data.weather[0].id}`);
        tempT.textContent = `${Math.floor(data.main.temp)}°C`;
        descriptW.textContent = data.weather[0].description;
        currentWind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
        currentHumidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
}


function setLocalStorage() {
    localStorage.setItem('city', city.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        city.value = 'Minsk';
    }

    getWeather(weatherIcon, temperature, weatherDescription, wind, humidity);
}


window.addEventListener('load', getLocalStorage);

const setErrorMessage = (message) => {
    errorInput.innerHTML = `Error: ${message}`;
    errorInput.style.color = 'red';
    temperature.textContent = '';
    weatherDescription.textContent = '';
    wind.textContent = '';
    humidity.textContent = '';
    weatherIcon.style.display = 'none';
}



