import { coordinatesByLocation } from "../data";
import { showSections } from "../index";

let searchedCities = [];

const searchForPlacesSection = () => {
  const searchSection = document.querySelector(".search-section");
  searchSection.insertAdjacentHTML(
    "afterend",
    `
  <div class="search-section-background">
  </div>`
  );

  searchSection.innerHTML = `
     <button class="search-section-close_button">&#x2715</button>
    <form class="search-section-form">
        <input type="search" style="font-family:Raleway, FontAwesome" class="search-section-form-input fa" placeholder="&#xF002;   search location">
        <button class="search-section-form-button">Search</button>
  </form> 
  <ul class="search-section-list"></ul>
`;

  function showSearchPanel() {
    searchSection.classList.add("show");
  }

  function hideSearchPanel() {
    searchSection.classList.remove("show");
    list.innerHTML = ``;
    input.value = "";
  }

  const searchButton = document.querySelector(
    ".current-weather-section-search_button"
  );

  const closeButton = document.querySelector(".search-section-close_button");

  searchButton.addEventListener("click", showSearchPanel);
  closeButton.addEventListener("click", hideSearchPanel);

  const input = document.querySelector(".search-section-form-input");
  const form = document.querySelector(".search-section-form");
  const list = document.querySelector(".search-section-list");

  function selectCityPosition(city) {
    hideSearchPanel();
    showSections(city.lat, city.lon);
  }

  async function search(e) {
    e.preventDefault();
    list.innerHTML = ``;
    searchedCities = await coordinatesByLocation(input.value);
    searchedCities.forEach((city) => {
      const li = document.createElement("li");
      li.innerHTML = `${city.name}, ${city.country}<i class="fa-solid fa-angle-right"></i>`;
      list.append(li);
      li.addEventListener("click", () => selectCityPosition(city));
    });
  }

  searchSection.append(list);
  form.addEventListener("submit", search);
};

export { searchForPlacesSection };
