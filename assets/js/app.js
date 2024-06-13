async function getWeather() {
  const apiKey = "85676f10ef7960e2953b2b17205bb20e";
  const cityName = document.querySelector("#city").value;
  if (!cityName) {
    alert("Please Enter a city");
    return;
  }
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
  try {
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.log("Error fetching hourly forecast data:", error);
    alert("Error fetching hourly forecast data. Please try again.");
  }

  const response2 = await fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => displayHourlyForecast(data.list))
    .catch((error) => console.log(error));
}
function displayWeather(data) {
  const tempArtInfo = document.getElementById("temp-art");
  const weatherInfoSec = document.getElementById("weather-info");
  const weatherIcon = document.getElementById("weather-icon");
  const hourlyForecastSec = document.getElementById("hourly-forecast");
  weatherIcon.innerHTML = "";
  hourlyForecastSec.innerHTML = "";
  tempArtInfo.innerHTML = "";
  if (data.cod === "404") {
    weatherInfoSec.innerHTML = `<p>${data.message}</p>`;
  } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

    const temperatureHTML = `
        <p>${temperature}°C</p>
    `;

    const weatherHtml = `
        <p>${cityName}</p>
        <p>${description}</p>
    `;

    tempArtInfo.innerHTML = temperatureHTML;
    weatherInfoSec.innerHTML = weatherHtml;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = description;

    showImage();
  }
}
function displayHourlyForecast(hourlyData) {
  const hourlyForecastDiv = document.querySelector("#hourly-forecast");
  const next24Hours = hourlyData.slice(0, 8); // Display the next 24 hours (3-hour intervals)
  console.log(next24Hours);
  next24Hours.forEach((item) => {
    const dateTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
    console.log(dateTime);
    const hour = dateTime.getHours();
    const temperature = Math.round(item.main.temp - 273.15); // Convert to Celsius
    const iconCode = item.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    const hourlyItemHtml = `
        <div class="hourly-item">
            <span>${hour}:00</span>
            <img src="${iconUrl}" alt="Hourly Weather Icon">
            <span>${temperature}°C</span>
        </div>
    `;

    hourlyForecastDiv.innerHTML += hourlyItemHtml;
  });
}
function showImage() {
  const weatherIcon = document.getElementById("weather-icon");
  weatherIcon.style.display = "block"; // Make the image visible once it's loaded
}
