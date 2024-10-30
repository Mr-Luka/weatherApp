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

async function fetchWeather () {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2dff0dc594da402c997192633242706&q=${cityInput}`);
    const data = await response.json();
    console.log(data);
}
fetchWeather();