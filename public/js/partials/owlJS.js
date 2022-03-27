export default function () {
  if (document.querySelector(".owl-carousel")) {
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
  }
}
