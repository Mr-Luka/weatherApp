


let cityInput = 'Los Angeles'

async function fetchWeather () {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2dff0dc594da402c997192633242706&q=${cityInput}`);
    const data = await response.json();
    console.log(data);
}
fetchWeather();