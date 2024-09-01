document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const cityInput = document.getElementById("city-input");
    const weatherResult = document.getElementById("weather-result");

    searchButton.addEventListener("click", () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        } else {
            alert("Please enter a city name.");
        }
    });

    const fetchWeather = (city) => {
        // Example API call - replace with actual weather API
        const apiKey = "YOUR_API_KEY"; // Replace with your API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => displayWeather(data))
            .catch((error) => console.error("Error fetching weather data:", error));
    };

    const displayWeather = (data) => {
        if (data.cod === 200) {
            weatherResult.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            weatherResult.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    };
});
