import {
  dataHomeCarousel,
  dataHomeNews,
} from "../../dataPages/dataHomePage.js";
import { sectionAnimat } from "../partials/animatJS.js";

export default function () {
  ///////////////////////////////////////////////////////////
  // HTML with JS :)
  // carousel home page
  const carouselHTML = dataHomeCarousel.map(
    (data, i) => `
   <div class="carousel-item ${i === 0 ? "active" : ""}">
    <img src="/public/img/carousel/${data.img}" 
    class="image_important d-block" alt="${data.title}" />
    <div class="carousel-caption d-none d-md-block">
      <h5>${data.title}</h5>
      <p>
        <a href="${data.src}" id="btn_send_blog1">
          💥${data.link}💥
        </a>
      </p>
    </div>
  </div>`
  );
  const carouselIneer = document.querySelector(".carousel-inner");
  carouselIneer.innerHTML = "";
  carouselHTML.map((data) =>
    carouselIneer.insertAdjacentHTML("afterbegin", data)
  );
  // News home page
  const HomeNewsHTML = dataHomeNews.map(
    (data, i) => `
    <article class="h_news ${data.animation} animate__animated " style="opacity:0">
      <div class="card Regular shadow">
        <img src="/public/img/blog/${data.img}" class="card-img-top" alt="${data.title}" />
        <div class="card-body">
          <h5 class="card-title">💥 ${data.title} 💥</h5>
          <p class="card-text">
            ${data.body}
          </p>
          <a href="${data.src}" class="btn btn-primary">ادامه . . .</a>
        </div>
      </div>
    </article>
    `
  );
  const homeNews = document.getElementById("home-news");
  homeNews.innerHTML = "";
  HomeNewsHTML.map((data) => homeNews.insertAdjacentHTML("afterbegin", data));
  ///////////////////////////////////////////////////////////
  // animation
  const newsLfet = document.querySelector(".news_lfet");
  const newsUp = document.querySelector(".news_up");
  const newsRight = document.querySelector(".news_right");

  // const HSectionVideo = document.querySelector("#H_section-2");
  const HSectiontext = document.querySelector("#H_section-3");

  sectionAnimat(newsLfet, "animate__backInLeft");
  sectionAnimat(newsUp, "animate__backInUp");
  sectionAnimat(newsRight, "animate__backInRight");
  // sectionAnimat(HSectionVideo, "animate__fadeInUp");
  sectionAnimat(HSectiontext, "animate__zoomInRight");
}
