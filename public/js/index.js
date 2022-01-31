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
//
const newsLfet = document.querySelector(".news_lfet");
const newsUp = document.querySelector(".news_up");
const newsRight = document.querySelector(".news_right");

const HSectionVideo = document.querySelector("#H_section-2");
const HSectiontext = document.querySelector("#H_section-3");

const sectionAnimat = function (name, cl) {
  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.classList.add(cl);
      observer.unobserve(entry.target);
    }
  };
  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });
  sectionObserver.observe(name);
};
sectionAnimat(newsLfet, "animate__backInLeft");
sectionAnimat(newsUp, "animate__backInUp");
sectionAnimat(newsRight, "animate__backInRight");
sectionAnimat(HSectionVideo, "animate__fadeInUp");
sectionAnimat(HSectiontext, "animate__lightSpeedInRight");
