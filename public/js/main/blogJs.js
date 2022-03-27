import { sectionAnimat } from "../partials/animatJS.js";

export default function () {
  // animated start page
  const blogLeft = document.querySelectorAll(".blog_left");
  const blogRight = document.querySelectorAll(".blog_right");

  blogLeft.forEach((el) => {
    sectionAnimat(el, "animate__backInLeft");
  });
  blogRight.forEach((el) => {
    sectionAnimat(el, "animate__backInLeft");
  });

  // fade next blog
  $(function () {
    $(".btn").click(function (e) {
      let x = e.target.dataset.btnBlog;
      $(`.blog_next${x}`).fadeToggle();
      $(`.bolg_text_title${x}`).fadeToggle(10);
      $(`.bolg_text_description${x}`).fadeToggle(10);
      $(`.blog_description${x}`).fadeToggle();
      $(`#blog_img${x}`).toggleClass("animate__backInDown");
      $(`#blog_img${x}`).toggleClass("blog_img-l");
    });
  });
}
