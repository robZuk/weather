function hightlightsWeatherSection(data) {
  // console.log(data);
  const hightlightSection = document.querySelector(
    ".hightlight-weather-section"
  );
  hightlightSection.innerHTML = `
  <h2 class="hightlight-weather-section-title">Today's Hightlights</h2>
  <section class="hightlight-weather-section-wrapper">
  <div class="hightlight-weather-section-wrapper-wind-status">
    <p class="hightlight-weather-section-wrapper-wind-status-title">Wind Status</p>
    <p class="hightlight-weather-section-wrapper-wind-status-value">${data.wind.speed.toFixed(
      0
    )}<span> mph</span></p>
    <p class="hightlight-weather-section-wrapper-wind-status-direction"><i class="fa-solid fa-location-arrow"></i> WSW</p>
    </div>
  <div class="hightlight-weather-section-wrapper-humidity">
    <p class="hightlight-weather-section-wrapper-humidity-title">Humidity</p>
    <p class="hightlight-weather-section-wrapper-humidity-value">${
      data.main.humidity
    }<span> %</span></p>
    
  <progress class="hightlight-weather-section-wrapper-humidity-progress" id="file" max="100" value="70"></progress>
  <dl class="hightlight-weather-section-wrapper-humidity-progress-description">
  <dt>0</dt>
  <dt>50</dt>
  <dt>100</dt>
  <dd>%</dd>
  </dl>
  
  </div>
  <div class="hightlight-weather-section-wrapper-humidity-visibility">
    <p class="hightlight-weather-section-wrapper-humidity-visibility-title">Visibility</p>
    <p class="hightlight-weather-section-wrapper-humidity-visibility-value">${(
      data.visibility * 0.000621371192
    ).toFixed(1)} <span>miles</span></p>
  </div>
  <div  class="hightlight-weather-section-wrapper-humidity-airpressure">
    <p class="hightlight-weather-section-wrapper-humidity-airpressure-title">Air Pressure</p>
    <p class="hightlight-weather-section-wrapper-humidity-airpressure-value">${
      data.main.pressure
    }<span> mb</span></p>
  </div>
  </section>
  `;

  const windDirectionIcon = document.querySelector(".fa-location-arrow");
  windDirectionIcon.style.transform = `rotate(${data.wind.deg - 45}deg)`;

  const progress = document.querySelector(
    ".hightlight-weather-section-wrapper-humidity-progress"
  );
  progress.value = data.main.humidity;
}

export { hightlightsWeatherSection };
