import "../styles/main.scss";
import { currentWeatherData, forecast5Day, userCurrentPosition } from "./data";
import { currentWeatherSection } from "./components/currentWeatherSection.js";
import { searchForPlacesSection } from "./components/searchForPlacesSection";
import { forecastWeatherSection } from "./components/forecastWeatherSection";
import { hightlightsWeatherSection } from "./components/hightlightsWeatherSection";
import { footer } from "./components/footer";
import { loader } from "./components/loader";

async function showSections(lat, lon) {
  //data from API
  const dataCurrentWeather = await currentWeatherData(lat, lon);
  const dataForecast5Day = await forecast5Day(lat, lon);

  currentWeatherSection(dataCurrentWeather);
  hightlightsWeatherSection(dataCurrentWeather);
  forecastWeatherSection(dataCurrentWeather, dataForecast5Day);
  searchForPlacesSection();
}

//user city
function weatherUserCity(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  showSections(lat, lon);
}

userCurrentPosition(weatherUserCity);

loader();
footer();

export { showSections, weatherUserCity };
