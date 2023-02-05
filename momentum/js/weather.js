const API_KEY = "7e292787b98e4bec24cc1d2271b6927d";

function onGeoOk(position) {
    const lat = position.coords.latitude; // 위도
    const lng =  position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
   // const daily = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather");
        const city = document.querySelector(".city");
        const temp = document.querySelector(".temp");

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp}°C`;
    });
}
 
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
