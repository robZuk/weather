import { convertTemperature } from "../utils/convertTemperature";
import chooseImage from "../utils/chooseImage";
import background from "../../assets/Cloud-background.png";
import { formatDate } from "../utils/formatDate";
import { userCurrentPosition } from "../data";
import { weatherUserCity } from "../index";

const wrapper = document.querySelector(".current-weather-section");

function currentWeatherSection(data) {
  const { celsius } = convertTemperature(data.main.temp);
  const { weekDay, monthDay, month } = formatDate(new Date());
  //background
  const innerWrapper = document.createElement("div");
  innerWrapper.classList.add("inner-wrapper");
  innerWrapper.style.backgroundImage = `url(${background}`;

  wrapper.innerHTML = `
  <button class="current-weather-section-search_button">Search for places</button>
  <button class="current-weather-section-location-icon">
    <i class="fa-solid fa-location-crosshairs"></i>
  </button>
  <image class="current-weather-section-image"/>
  <p class="current-weather-section-temperature">${celsius}</p>
  <p class="current-weather-section-title">${data.weather[0].main}</p>
  <p class="current-weather-section-date">Today &#x2022 ${weekDay} ${monthDay} ${month}</p>
  <p class="current-weather-section-location">${data.name}, ${data.sys.country}</p>
  `;

  const locationIcon = document.querySelector(
    ".current-weather-section-location-icon"
  );

  locationIcon.addEventListener("click", () =>
    userCurrentPosition(weatherUserCity)
  );

  wrapper.append(innerWrapper);
  const image = document.querySelector(".current-weather-section-image");
  image.src = chooseImage(data);
}

export { currentWeatherSection };
