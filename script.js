const weatherBackground = document.querySelector('.weather-app');
const temp = document.querySelector('.temp');
const cityName = document.querySelector('.name');
const time = document.querySelector('.time');
const date = document.querySelector('.date');
const weatherIcon = document.querySelector('.icon img');
const weatherCondition = document.querySelector('.condition');
const form = document.querySelector('#locationInput');
const search = document.querySelector('.search'); 
const button = document.querySelector('.submit');
const cities = document.querySelector('.city');
const cloudy = document.querySelector('.cloud');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');


let cityInput = 'Los Angeles'

function fetchWeather () {
    fetch(`http://api.weatherapi.com/v1/current.json?key=2dff0dc594da402c997192633242706&q=${cityInput}`)
    .then(response => response.json()) 
    .then(data => {
        console.log(data)

        temp.innerHTML = data.current.temp_f;
        weatherCondition.innerHTML = data.current.condition.text;

        const date = data.location.localtime;
        const year = parseInt(date.substr(0, 4))
        const month = parseInt(date.substr(5, 2));
        const day = parseInt(date.substr(8, 2));
        const time = date.substr(11);
    })
}
fetchWeather();



