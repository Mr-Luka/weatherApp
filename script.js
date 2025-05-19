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

cities.forEach(city => {
    city.addEventListener('click', (e)=> {
        cityInput = e.target.innerHTML;
        fetchWeather();
        app.style.opacity = "0";
    })
})

form.addEventListener('submit', e => {
    if (search.value.length == 0) {
        alert('Please enter a city name');
    } else {
        cityInput = search.value;
        fetchWeather();
        search.value = "";
        app.style.opacity = "0";
    }
        e.preventDefault();
})

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
    fetch(`https://api.weatherapi.com/v1/current.json?key=2dff0dc594da402c997192633242706&q=${cityInput}`)
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

        let timeOfDay = "day";
        const code = data.current.condition.code;

        if (!data.current.is_day) {
            timeOfDay = 'night';
        }

        if (code == 1000) {
            // Clear sky
            app.style.backgroundImage = `url(./imgs/${timeOfDay}/clear.jpg)`;
            btn.style.background = "#e5ba92";
            if(timeOfDay === "night") {
                btn.style.background = "#181e27";
            }
            //cloudy
        } else if (
            code == 1003 ||
            code == 1006 ||
            code == 1009 ||
            code == 1030 ||
            code == 1069 ||
            code == 1087 ||
            code == 1135 ||
            code == 1273 ||
            code == 1276 ||
            code == 1279 ||
            code == 1282
            ) {
                app.style.backgroundImage = `url(./imgs/${timeOfDay}/cloudy.jpg)`;
                btn.style.background = "#fa6d1b";
                if (timeOfDay === "night") {
                    btn.style.background = "#181e27";
                }
            } // rain
            else if (
                code == 1063 ||
                code == 1069 ||
                code == 1072 ||
                code == 1150 ||
                code == 1153 ||
                code == 1180 ||
                code == 1183 ||
                code == 1186 ||
                code == 1189 ||
                code == 1192 ||
                code == 1195 ||
                code == 1204 ||
                code == 1207 ||
                code == 1240 ||
                code == 1243 ||
                code == 1246 ||
                code == 1249 ||
                code == 1252
            )  {
                app.style.backgroundImage = `url(./imgs/${timeOfDay}/rain.jpg)`;
                btn.style.background = "#647d75";
                if (timeOfDay === "night") {
                    btn.style.background = "#325c80";
                }
            } // snow
            else {
                app.style.backgroundImage = `url(./imgs/${timeOfDay}/snow.jpg)`;
                btn.style.background = "#4d72aa";
                if (timeOfDay === "night") {
                    btn.style.background = "#1b1b1b";
            }
        }
        app.style.opacity = "1"
    })
    .catch(()=> {
        alert("City not found, please try again");
        app.style.opacity = "1";
    })
}
fetchWeather();
app.style.opacity = "1"



