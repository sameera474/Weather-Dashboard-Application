# Weather Dashboard Application

## Overview
The Weather Dashboard Application is a web-based tool designed to provide real-time weather updates and forecasts. Utilizing the OpenWeatherMap API, it allows users to search for current weather conditions and forecasts in cities worldwide. The application displays various weather parameters such as temperature, humidity, wind speed, and more, offering an intuitive and comprehensive weather reporting tool.

## Features
- **Live Weather Updates:** Get current weather conditions, including temperature, humidity, and wind speed.
- **Weather Forecast:** Access weather forecasts to plan ahead.
- **Search by City:** Find weather information for your city with a simple search.
- **Temperature Units Toggle:** Switch between Celsius and Fahrenheit.
- **Dynamic Weather Icons:** Visual representation of the weather conditions.

## Technology Stack
- HTML5
- CSS3
- JavaScript (ES6)
- OpenWeatherMap API

## Getting Started

### Prerequisites
- A modern web browser
- Node.js (optional, for running a local server)

### Setup
1. Clone this repository to your local machine using `git clone https://github.com/yourusername/Weather-Dashboard-Application.git`.
2. Open the `index.html` file in your web browser to view the application. Alternatively, you can set up a local server using Node.js or any other preferred method and access the application through the server.

### API Key
This application requires an API key from OpenWeatherMap. Follow these steps to use your own key:
1. Sign up at [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.
2. Replace the `apiKey` variable's value in the script with your own API key.

```javascript
const apiKey = "YOUR_API_KEY_HERE";
