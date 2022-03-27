import { sectionAnimat } from "../partials/animatJS.js";

export default function () {
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
