import { formatDate } from "../utils/formatDate";
import chooseImage from "../utils/chooseImage";
import { convertTemperature } from "../utils/convertTemperature";

const iconsWrapper = document.querySelector(".icons-wrapper");
iconsWrapper.innerHTML = `
<button class="celscius-icon active">&#176;C</button>
<button class="fahrenheit-icon">&#176;F</button>

`;

function forecastWeatherSection(dataCurrentWeather, dataForecast5Day) {
  let temperatureType = "celsius";

  function renderCurrentTemperature() {
    const mainTemp = document.querySelector(
      ".current-weather-section-temperature"
    );
    const { celsius, fahrenheit } = convertTemperature(
      dataCurrentWeather.main.temp
    );
    mainTemp.innerHTML = `${
      temperatureType === "celsius" ? celsius : fahrenheit
    }`;
  }

  //forecast 5 day section
  const forecast5DaySection = document.querySelector(
    ".forecast-weather-section"
  );

  forecast5DaySection.innerHTML = ``;

  //removed current day
  const today = new Date().toISOString().slice(0, 10);
  const data = dataForecast5Day.list
    .map((item) => {
      return { ...item, dt_txt: item.dt_txt.slice(0, 10) };
    })
    .filter((item, index) => item.dt_txt !== today);

  //grouping data by date
  const groupByDate = data.reduce((prev, current) => {
    const { dt_txt } = current;
    prev[dt_txt] = prev[dt_txt] || [];
    prev[dt_txt].push(current);
    return prev;
  }, {});

  const fahrenheitIcon = document.querySelector(".fahrenheit-icon");
  const celsciusIcon = document.querySelector(".celscius-icon");

  //days weather
  for (const key in groupByDate) {
    function renderForecastTemperatures() {
      temperatures.innerHTML = `
      <p>${temperatureType === "celsius" ? maxCelscius : maxFahrenheit}</p>
      <p>${temperatureType === "celsius" ? minCelscius : minFahrenheit}</p>`;
    }

    const minTemp = Math.min(
      ...groupByDate[key].map((item) => item.main.temp_min)
    );
    const maxTemp = Math.max(
      ...groupByDate[key].map((item) => item.main.temp_max)
    );

    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const { weekDay, monthDay, month } = formatDate(key);

    //day
    const { celsius: minCelscius, fahrenheit: minFahrenheit } =
      convertTemperature(minTemp);
    const { celsius: maxCelscius, fahrenheit: maxFahrenheit } =
      convertTemperature(maxTemp);

    const day = document.createElement("div");

    day.classList.add("forecast-weather-section-day");
    day.innerHTML = `${
      key === tomorrow.toISOString().slice(0, 10)
        ? `<div class="-title">
         Tomorrow
        </div>`
        : `<div class="-title">
          ${weekDay} ${monthDay} ${month}
        </div>`
    }`;

    //image
    const image = document.createElement("img");
    image.src = groupByDate[key][3]
      ? chooseImage(groupByDate[key][3])
      : chooseImage(groupByDate[key][groupByDate[key].length - 1]);
    day.append(image);

    //temperatures
    const temperatures = document.createElement("div");
    temperatures.classList.add("forecast-weather-section-day-temperatures");

    renderForecastTemperatures();
    day.append(temperatures);

    forecast5DaySection.append(day);

    function toggleIcons(icon) {
      if (!icon.classList.contains("active")) {
        fahrenheitIcon.classList.toggle("active");
        celsciusIcon.classList.toggle("active");
      }
    }

    fahrenheitIcon.addEventListener("click", () => {
      temperatureType = "fahrenheit";
      renderForecastTemperatures();
      toggleIcons(fahrenheitIcon);
    });
    celsciusIcon.addEventListener("click", () => {
      temperatureType = "celsius";
      renderForecastTemperatures();
      toggleIcons(celsciusIcon);
    });
  }

  fahrenheitIcon.addEventListener("click", renderCurrentTemperature);
  celsciusIcon.addEventListener("click", renderCurrentTemperature);
}

export { forecastWeatherSection };
