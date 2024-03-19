const apiKey = "92eee5c7adef3eb7ae8f9181b46f2b63";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// Search Button
document.getElementById("search-button").addEventListener("click", function () {
  // console.log("its click");
  let cityName = document.getElementById("search-input").value.trim();
  if (cityName != "" && cityName != undefined) {
    console.log(cityName);
    const createdUrl = `${weatherUrl}?q=${cityName}&appid=${apiKey}&units=metricdocument`;
    fetchWeatherDetail(createdUrl, cityName);
  } else {
    alert("Please enter a city name");
  }
});

//fetch function
async function fetchWeatherDetail(createdUrl) {
  console.log("calling fetchWeatherDetail");
  try {
    const response = await fetch(createdUrl);
    const data = await response.json();
    console.log(data);
    liveWeather(data);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch weather data. Please try again.");
  }
}

// Live Weather
function liveWeather(data) {
  document.getElementById("country").innerText = `Country ${data.sys.country}`;
  document.getElementById("city-name").innerText = `City ${data.name}`;
  document.getElementById("temperature").innerText = `Temperature ${(
    parseFloat(data.main.temp) - 273.15
  ).toFixed(2)} °C`;
  document.getElementById(
    "humidity"
  ).innerText = `Humidity ${data.main.humidity}`;
  document.getElementById("weather-icon").innerText = data.weather[0].icon;
  document.getElementById(
    "wind-speed"
  ).innerText = `Wind Speed ${data.wind.speed}`;
  let temperature = parseFloat(data.main.temp) - 273.15;
  forToggleSwitch(temperature);
}

// celsius and fahrenheit

function forToggleSwitch(temperature) {
  console.log(temperature);
  document
    .getElementById("toggleSwitch")
    .addEventListener("change", function () {
      if (this.checked) {
        document.getElementById(
          "temperature"
        ).innerText = `Temperature , ${celsiusToFahrenheit(temperature)} °F`;
        console.log(celsiusToFahrenheit(temperature));
      } else {
        document.getElementById(
          "temperature"
        ).innerText = `Temperature , ${fahrenheitToCelsius(temperature)} °C`;
        console.log(fahrenheitToCelsius(temperature));
      }
    });
  function celsiusToFahrenheit(temperature) {
    return ((temperature * 9) / 5 + 32).toFixed(2);
  }
  function fahrenheitToCelsius(temperature) {
    return temperature.toFixed(2);
  }
}

// Clear Button
document.getElementById("clear-button").addEventListener("click", function () {
  document.getElementById("search-input").value = "";
  document.getElementById("country").innerText = "";
  document.getElementById("city-name").innerText = "";
  document.getElementById("temperature").innerText = "";
  document.getElementById("humidity").innerText = "";
  document.getElementById("weather-icon").innerText = "";
  document.getElementById("wind-speed").innerText = "";
});
