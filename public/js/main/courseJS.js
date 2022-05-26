import { sectionAnimat } from "../partials/animatJS.js";

export default function () {
  // OWL code
  const carouselHTML = [...Array(8 + 1).keys()].slice(1).map(
    (data) => `
      <div class="item">
        <h4><img src="/public/img/courses/old cours/oldCours (${data}).jpg" alt="oldCours ${data}"></h4>
      </div>
  `
  );
  const owlCarousel = document.getElementById("OWL-carousel");
  owlCarousel.innerHTML = "";
  carouselHTML.map((e) => owlCarousel.insertAdjacentHTML("afterbegin", e));
  // animations
  const courseleft = document.querySelector(".course_left");
  const courseUp1 = document.querySelector(".course_up1");
  const courseUp2 = document.querySelector(".course_up2");
  const courseRight = document.querySelector(".course_right");
  if ((courseRight, courseleft, courseUp1, courseUp2)) {
    sectionAnimat(courseleft, "animate__backInLeft");
    sectionAnimat(courseUp1, "animate__backInUp");
    sectionAnimat(courseUp2, "animate__backInUp");
    sectionAnimat(courseRight, "animate__backInRight");
  }
}
