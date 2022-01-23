// padding top for header
const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");
header.style.paddingTop = nav.offsetHeight + "px";
//
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
