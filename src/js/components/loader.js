import animation from "../../assets/animation.gif";
import background from "../../assets/Cloud-background.png";
const wrapper = document.querySelector(".loader");

function loader() {
  wrapper.innerHTML = `
  <div class="loader-inner-wrapper"></div>
  <h1 class="loader-title">Weather forecast</h1>
  <image class="loader-image"/>
`;
  const image = document.querySelector(".loader-image");
  image.src = animation;

  const innerWrapper = document.querySelector(".loader-inner-wrapper");
  innerWrapper.style.backgroundImage = `url(${background}`;
}

function hideLoader() {
  wrapper.style.display = "none";
}
window.addEventListener("load", () => setTimeout(hideLoader, 700));

export { loader };
