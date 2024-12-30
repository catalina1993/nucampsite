const carousel = new bootstrap.Carousel("#homeCarousel", {
  interval: 5000,
  pause: false,
});

const carouselButton = document.getElementById("carouselButton");
const faIcon = document.getElementById("faButton");

carouselButton.addEventListener("click", function () {
  if (faIcon.classList.contains("fa-pause")) {
    faIcon.classList.remove("fa-pause");
    faIcon.classList.add("fa-play");
    carousel.pause();
  } else {
    faIcon.classList.remove("fa-play");
    faIcon.classList.add("fa-pause");
    carousel.cycle();
  }
});

async function fetchWeather() {
  const apiKey =
    process.env.OPEN_WEATHER_API_KEY || "4038e5213d3e457bacb734cff0f75c65";
  const city = "Virginia Beach";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

fetchWeather();

function displayWeather(data) {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const iconCode = data.weather[0].icon;

  const weatherIcon = document.querySelector("#weather-icon");
  const weatherTemp = document.querySelector("#weather-temp");
  const weatherDescription = document.querySelector("#weather-description");

  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

  weatherIcon.innerHTML = `<img src="${iconUrl}" alt="${description}" />`;
  weatherTemp.textContent = `${temperature}\u00B0F`;
  weatherDescription.textContent =
    description.charAt(0).toUpperCase() + description.slice(1);
}
