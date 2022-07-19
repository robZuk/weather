function convertTemperature(temp) {
  const celsius = `${(temp - 275.15).toFixed(0)}<span> &#176;C</span>`;
  const fahrenheit = `${((temp - 273.15) * 1.8 + 32).toFixed(
    0
  )}<span> &#176;F</span>`;
  return { celsius, fahrenheit };
}

export { convertTemperature };
