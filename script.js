const apiKey = "92eee5c7adef3eb7ae8f9181b46f2b63";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const forcastWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast";

console.log("latitude:");
// Search Button
document.getElementById("search-button").addEventListener("click", function () {
  // console.log("its click");
  let cityName = document.getElementById("search-input").value.trim();
  if (cityName != "" && cityName != undefined) {
    console.log(cityName);

    const liveWheatherUrl = `${weatherUrl}?q=${cityName}&appid=${apiKey}&units=metricdocument`;
    console.log("forecastWheatherUrl >", liveWheatherUrl);
    fetchWeatherDetail(liveWheatherUrl, cityName);
  } else {
    alert("Please enter a city name");
  }

  const main_weather_container = document.querySelector(
    ".main-weather-container"
  );
  // Check if the forecast button already exists to avoid duplication
  let forecastButton = document.querySelector(".forecast-button");
  if (!forecastButton) {
    let forecast_button = document.createElement("button");
    forecast_button.className = "forecast-button";
    forecast_button.innerText = "Forecast";
    main_weather_container.appendChild(forecast_button);

    forecast_button.addEventListener("click", function () {
      console.log("its click");
      let cityName = document.getElementById("search-input").value.trim();
      if (cityName != "" && cityName != undefined) {
        console.log(cityName);

        const getForcastUrl = (latitude, longitude, apiKey) => {
          const forecastWheatherUrl = `${forcastWeatherUrl}/?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

          return forecastWheatherUrl;
        };

        console.log("latitude:", latitude);
        console.log("latitude:", longitude);
        console.log("forecastWheatherUrl >", getForcastUrl);

        fetchForecastWeatherDetail(getForcastUrl);
      } else {
        alert("Please enter a city name");
      }
    });
  }
});

//fetch function live weather
async function fetchWeatherDetail(liveWheatherUrl) {
  console.log("calling fetchWeatherDetail");
  try {
    const response = await fetch(liveWheatherUrl);
    const data = await response.json();
    console.log(data);
    liveWeather(data);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch weather data. Please try again.");
  }
}

// fetch function forecast weather
async function fetchForecastWeatherDetail(forecastWheatherUrl) {
  console.log("calling fetchWeatherDetail");
  try {
    const response = await fetch(getForcastUrl);
    const data = await response.json();
    console.log(data);
    forecastWeather(data);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch weather data. Please try again.");
  }
}
console.log("latitude:1", latitude);
// Live Weather
function liveWeather(data) {
  document.getElementById("country").innerText = `${data.sys.country}`;
  document.getElementById("city-name").innerText = `${data.name}`;
  document.getElementById(
    "humidity"
  ).innerText = `Humidity ${data.main.humidity}`;
  const iconCode = data.weather[0].icon;
  const iconUrl = ` https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  document.getElementById("weather-icon").src = iconUrl;
  document.getElementById(
    "wind-speed"
  ).innerText = `Wind Speed ${data.wind.speed}`;
  const temperature = (parseFloat(data.main.temp) - 273.15).toFixed(1);
  document.getElementById("temperature").innerText = `${temperature} °C`;
  forToggleSwitch(temperature);
  latitude = data.coord.lat;
  longitude = data.coord.lon;

  // return latitude, longitude;
}
const forecasttime = [1, 2, 3, 4, 5, 6, 7, 8];
const forecast = document.querySelector(".forecast");
function forecastWeather(data) {
  console.log("forecastWeather............................");

  for (let i = 0; i < forecasttime.length; i++) {
    const forecastPannels = document.createElement("div");
    forecastPannels.className = "forcast-pannels";
    forecastPannels.setAttribute("id", i);
    forecast.appendChild(forecastPannels);

    forecasttime[i] = data.list[0];
    console.log(forecasttime[i]);
    const humidityValue = document.createElement("div");
    humidityValue.setAttribute("id", i);
    // document.getElementById("humidityValue").innerText = `${data.city.name}`;
    forecastPannels.appendChild(humidityValue);
    console.log(humidityValue);
  }

  // document.getElementById("date").innerText = `${data.sys.country}`;
  // document.getElementById("city-name").innerText = `${data.city.name}`;
  // document.getElementById("feels-like-temperature").innerText = `${data.name}`;
  // document.getElementById(
  //   "humidity-date"
  // ).innerText = `Humidity ${data.main.humidity}`;
  // const iconCode = data.weather[0].icon;
  // const iconUrl = ` https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  // document.getElementById("weather-icon-date").src = iconUrl;
  // document.getElementById(
  //   "wind-speed-date"
  // ).innerText = `Wind Speed ${data.wind.speed}`;
  // const temperature = (parseFloat(data.main.temp) - 273.15).toFixed(1);
  // document.getElementById("temperature-date").innerText = `${temperature} °C`;
  // forToggleSwitch(data.main.temp);
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
        ).innerText = `${celsiusToFahrenheit(temperature)} °F`;
        console.log(celsiusToFahrenheit(temperature));
      } else {
        document.getElementById(
          "temperature"
        ).innerText = `${fahrenheitToCelsius(temperature)} °C`;
        console.log(fahrenheitToCelsius(temperature));
      }
    });
  function celsiusToFahrenheit(temperature) {
    return ((temperature * 9) / 5 + 32).toFixed(1);
  }
  function fahrenheitToCelsius(temperature) {
    return temperature;
  }
}

// Clear Button
document.getElementById("clear-button").addEventListener("click", function () {
  // document.getElementsByClassName("forecast-button").remove();
  document.getElementById("search-input").value = "";
  document.getElementById("country").innerText = "";
  document.getElementById("city-name").innerText = "";
  document.getElementById("temperature").innerText = "";
  document.getElementById("humidity").innerText = "";
  document.getElementById("weather-icon").innerText = "";
  document.getElementById("wind-speed").innerText = "";
  document.getElementById("weather-icon").src = "";
  document.getElementById("toggleSwitch").checked = false;
});
