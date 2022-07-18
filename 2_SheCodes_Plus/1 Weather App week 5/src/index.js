let now = new Date();
let dateToday = document.querySelector("#date-today");
let timeNow = document.querySelector("#current-time");

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let day = days[now.getDay()];
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

dateToday.innerHTML = `${day} ${date} ${month} ${year}`;
timeNow.innerHTML = `${hours}:${minutes}`;

// *******end of MY location current date and time XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function displayWeatherCondition(response) {
  document.querySelector("#searched-location").innerHTML = response.data.name;
  document.querySelector("#temperature-now").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML =
    response.data.main.humidity + "%";
  document.querySelector("#wind-speed").innerHTML =
    Math.round(response.data.wind.speed) + "km/h";
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function searchCity(city) {
  let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = 19;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Glasgow");

// *****BELOW IS WHAT I DID wk5 - above it mostly matt's - why do my % and km/h disappear and where is "description"?!

// function citySearch(event) {
//   event.preventDefault();
//   let citySearchInput = document.querySelector("#search-text-input");
//   let h2 = document.querySelector("h2");

//   h2.innerHTML = `${citySearchInput.value}`;
// }
// let form = document.querySelector("#search-form");
// form.addEventListener("submit", citySearch);

// function showFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature-now");
//   temperatureElement.innerHTML = 66;
// }

// function showCelcius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature-now");
//   temperatureElement.innerHTML = 19;
// }

// let temperatureF = document.querySelector("#temperature-f");
// temperatureF.addEventListener("click", showFahrenheit);

// let temperatureC = document.querySelector("#temperature-c");
// temperatureC.addEventListener("click", showCelcius);

// // this is from today - above is week 4

// function showCurrentWeather(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let currentTemp = document.querySelector("#temperature-now");
//   currentTemp.innerHTML = ` ${temperature}°C`;
// }

// function search(event) {
//   event.preventDefault();
//   let searchInput = document.querySelector("#search-text-input");
//   let searchedCity = document.querySelector("#searched-location");
//   searchedCity.innerHTML = `${searchInput.value}`;
//   let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
//   axios.get(`${apiUrl}&apiid=${apiKey}`).then(showCurrentWeather);
// }

// let form = document.querySelector("#search-form");
// form.addEventListener("submit", search);

// //ME: the below works but only on page reset and not click of button - response.preventDefault(); didn't work

// function showCurentPosition(position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let apiKey = "1cea906f8f3ab268b1c4225a33a9637a";
//   let unit = "metric";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
//   axios.get(apiUrl).then(showTemperatureNow);
// }

// function showTemperatureNow(response) {
//   let temperature = Math.round(response.data.main.temp);
//   let cityNow = response.data.name;
//   let currentLocation = document.querySelector("#searched-location");
//   currentLocation.innerHTML = `${cityNow}`;
//   let currentTemperature = document.querySelector("#temperature-now");
//   currentTemperature.innerHTML = `${temperature}`;
// }

// navigator.geolocation.getCurrentPosition(showCurentPosition);

// let currentButton = document.querySelector("#current-location-button");
// currentButton.addEventListener("click", showTemperatureNow);
