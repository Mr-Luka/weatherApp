const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".name");
const time = document.querySelector(".time");
const dateNow = document.querySelector(".date");
const weatherIcon = document.querySelector(".icon");
const weatherCondition = document.querySelector(".condition");
const form = document.querySelector("#locationInput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");
const cloudy = document.querySelector(".cloud");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

let cityInput = 'Los Angeles'


function dayOfTheWeek (month, day, year) {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return weekday[new Date(`${month}/${day}/${year}`).getDay()]
}

function fetchWeather () {
    fetch(`http://api.weatherapi.com/v1/current.json?key=2dff0dc594da402c997192633242706&q=${cityInput}`)
    .then(response => response.json()) 
    .then(data => {
        console.log(data)

        temp.innerHTML = data.current.temp_f;
        cityName.innerHTML = data.location.name;
        weatherCondition.innerHTML = data.current.condition.text;

        const date = data.location.localtime;
        const year = parseInt(date.slice(0, 4));
        const month = parseInt(date.slice(5, 7));
        const day = parseInt(date.slice(8, 10));
        const timeThere = date.slice(11)
        console.log(month, day, year)

        time.innerHTML = timeThere;
        dateNow.innerHTML = `${dayOfTheWeek(month, day, year)}`;
        
        const iconId = data.current.condition.icon.slice(
            "//cdn.weatherapi.com/weather/64x64/".length
        );
        weatherIcon.src = "./icons/" + iconId;
        cloudy.innerHTML = data.current.cloud + '%';
        humidity.innerHTML = data.current.humidity + '%';
        wind.innerHTML = data.current.wind_mph + ' mph';



    })
}
fetchWeather();




