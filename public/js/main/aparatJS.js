import dataAparat from "../../dataPages/dataAparat.js";
const slider = document.querySelector(".drag_items");
const dataListOptions = document.querySelector("#datalistOptions");

export default function () {
  //////////////////////////////////////////
  //
  const options = dataAparat.map(
    (data, i) => `
    <option class="aparat-list_options" value="${data.name}"></option>
  `
  );
  dataListOptions.innerHTML = "";
  dataListOptions.innerHTML = options;
  ///////////////////////////////////////////
  // search href
  const formControl = document.querySelector(".form-control");
  const formAparat = document.querySelector(".aparat-form");
  formAparat.addEventListener("submit", function (e) {
    e.preventDefault();
    if (formControl.value) {
      dataAparat.map((data, i) => {
        if (data.name === formControl.value) {
          window.location.href = data.url;
        }
      });
    }
  });
  ///////////////////////////////////////////
  // Html results
  const html = dataAparat.map(
    (data, i) => `
    <article class="drag_item item1">
        <a href=${data.url} class="aparat_link">
            <img src="${data.image}" alt="${data.name}">
        </a>
    </article>
    <article class=" drag_item item2}" data-I="2">
        <a href=${data.url} class="aparat_link">
            <div class="aparat_text">
                <h3>${data.name}</h3>
                <h5>استاد ${data.master}</h5>
                <h6>1400</h6>
            </div>
        </a>
    </article>
  `
  );
  slider.innerHTML = "";
  // slider.innerHTML = html;
  html.map((data) => slider.insertAdjacentHTML("afterbegin", data));
  ///////////////////////////////////////////
  // scroll section
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
}
