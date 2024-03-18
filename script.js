const apiKey = "92eee5c7adef3eb7ae8f9181b46f2b63";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// const lat = Latitude;

// const lon = Longitude;

// const units = Unit;

// const lang = language;

//

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
//function done
async function fetchWeatherDetail(createdUrl, cityName) {
  console.log("calling fetchWeatherDetail");
  try {
    const response = await fetch(createdUrl);
    const data = await response.json();
    console.log(data);
    document.getElementById("city-name").innerText = data.name;
    document.getElementById("temperature").innerText = data.main.temp;
    document.getElementById("humidity").innerText = data.main.humidity;
    // document.getElementById("wind-speed").innerText = windSpeed;
  } catch (error) {
    console.error(error);
    alert("Failed to fetch weather data. Please try again.");
  }
}
