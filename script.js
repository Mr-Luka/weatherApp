const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".name");
const time = document.querySelector(".time");
const date = document.querySelector(".date");
const weatherIcon = document.querySelector(".icon");
const weatherCondition = document.querySelector(".condition");
const form = document.querySelector("#locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");
const cloudy = document.querySelector(".cloud");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");


let cityInput = 'Los Angeles';

function dayOfTheWeek (day, month, year) {
    const weekday = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    return weekday[new Date(`${day}/${month}/${year}`).getDay()]
}

function fetchWeather () {
    fetch(`http://api.weatherapi.com/v1/current.json?key=2dff0dc594da402c997192633242706&q=${cityInput}`)
    .then(response => response.json()) 
    .then(data => {
        console.log(data)

        temp.innerHTML = data.current.temp_f;
        weatherCondition.innerHTML = data.current.condition.text;

        const localDate = data.location.localtime;
        const year = parseInt(localDate.slice(0, 4));
        const month = parseInt(localDate.slice(5, 2));
        const day = parseInt(localDate.slice(8, 2));
        const timeValue = localDate.slice(11);

        date.innerHTML = `${dayOfTheWeek(day, month, year)}`;
        time.innerHTML = timeValue;
        cityName.innerHTML = data.location.name;

        const iconId = data.current.condition.icon.slice("//cdn.weatherapi.com/weather/64x64/".length);
        weatherIcon.src = `https://cdn.weatherapi.com/weather/64x64/${iconId}`;

    })
}
fetchWeather();



