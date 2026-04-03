
// navigator.geolocation.getCurrentPosition(function (location) {
//     console.log(location.coords.)
// })

// fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${'karachi'}&appid=392fc470c1ac8b42b2f40951a9a96cc4&units=metric`
// )


var weather = document.getElementById("weather")
var city = document.getElementById("city")


function getWeather() {
    // console.log(city.value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?appid=392fc470c1ac8b42b2f40951a9a96cc4&q=${city.value}&units=metric`)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            weather.innerHTML = `
            <h1>${data.name}</h1>
            <h2>temp : ${Math.round(data.main.temp)}°c</h2>
            <p>humidity : ${data.main.humidity}%</p>`
        })
        .catch(function (err) {
            console.log(err);
        })

        city.value = ""
}

// getWeather()