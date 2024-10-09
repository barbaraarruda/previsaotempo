const API_KEY = ''

function getData(city) {
    const route = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    return fetch(route).then(response => response.json())
}