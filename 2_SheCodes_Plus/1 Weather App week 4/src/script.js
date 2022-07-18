let now = new Date();
let dateToday = document.querySelector("#date-today");
let timeNow = document.querySelector("#time-right-now");

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

function citySearch(event) {
  event.preventDefault();
  let citySearchInput = document.querySelector("#search-text-input");
  let h2 = document.querySelector("h2");

  h2.innerHTML = `${citySearchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

function showFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = 66;
}

function showCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-now");
  temperatureElement.innerHTML = 19;
}

let temperatureF = document.querySelector("#temperature-f");
temperatureF.addEventListener("click", showFahrenheit);

let temperatureC = document.querySelector("#temperature-c");
temperatureC.addEventListener("click", showCelcius);
