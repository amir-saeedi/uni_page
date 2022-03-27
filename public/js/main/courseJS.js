import { sectionAnimat } from "../partials/animatJS.js";

export default function () {
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
