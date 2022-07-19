import axios from "axios";

//cities position
async function coordinatesByLocation(city) {
  try {
    const result = await axios(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${5}&appid=${
        process.env.API_KEY
      }`
    );
    const { data } = await result;
    return data;
  } catch (error) {
    console.log(error);
  }
}

//user city position
function userCurrentPosition(sucess) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sucess);
  } else alert("Geolocation is not supported by your browser");
}

//weather data
async function currentWeatherData(lat, lon) {
  try {
    const result = await axios(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
    );
    const { data } = await result;
    return data;
  } catch (error) {
    console.log(error);
  }
}

//weather data for 5 days
async function forecast5Day(lat, lon) {
  try {
    const result = await axios(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`
    );
    const { data } = await result;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export {
  coordinatesByLocation,
  currentWeatherData,
  forecast5Day,
  userCurrentPosition,
};
