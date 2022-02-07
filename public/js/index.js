// padding top for header
const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");
header.style.paddingTop = nav.offsetHeight + "px";
if (screen.width <= 1000) {
  header.style.paddingTop = 100 + "px";
}
// owl
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
//  animate
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
if (document.querySelector("#H_header")) {
  // home page animated
  const newsLfet = document.querySelector(".news_lfet");
  const newsUp = document.querySelector(".news_up");
  const newsRight = document.querySelector(".news_right");

  const HSectionVideo = document.querySelector("#H_section-2");
  const HSectiontext = document.querySelector("#H_section-3");

  sectionAnimat(newsLfet, "animate__backInLeft");
  sectionAnimat(newsUp, "animate__backInUp");
  sectionAnimat(newsRight, "animate__backInRight");
  sectionAnimat(HSectionVideo, "animate__fadeInUp");
  sectionAnimat(HSectiontext, "animate__zoomInRight");
} else if (document.querySelector("#cours_header")) {
  // courses page animated
  const courseleft = document.querySelector(".course_left");
  const courseUp1 = document.querySelector(".course_up1");
  const courseUp2 = document.querySelector(".course_up2");
  const courseRight = document.querySelector(".course_right");

  sectionAnimat(courseleft, "animate__backInLeft");
  sectionAnimat(courseUp1, "animate__backInUp");
  sectionAnimat(courseUp2, "animate__backInUp");
  sectionAnimat(courseRight, "animate__backInRight");
} else if (document.querySelector("#blog_header")) {
  // blog page  animated
  const blogLeft = document.querySelectorAll(".blog_left");
  const blogRight = document.querySelectorAll(".blog_right");

  blogLeft.forEach((el) => {
    sectionAnimat(el, "animate__backInLeft");
  });
  blogRight.forEach((el) => {
    sectionAnimat(el, "animate__backInLeft");
  });
}
///////////////////////////////////////
// animate logo navbar
const logoUni = document.querySelector(".logo_uni");
document.addEventListener("scroll", function (e) {
  if (e.isTrusted) {
    if (window.scrollY > 100) {
      logoUni.classList.add("animate__backOutUp");
      logoUni.classList.remove("animate__backInDown");
    } else {
      logoUni.classList.remove("animate__backOutUp");
      logoUni.classList.add("animate__backInDown");
    }
  }
});
//////////////////////////////
// blog animated
$(function () {
  $(".btn").click(function (e) {
    let x = e.target.dataset.btnBlog;
    $(`.blog_next${x}`).fadeToggle();
    $(`.bolg_text_title${x}`).fadeToggle();
    $(`.bolg_text_description${x}`).fadeToggle();
    $(`.blog_description${x}`).fadeToggle();
  });
});

/////////////////////////////////////
// Menu fade animation
const handeleHover = function (e, opa) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav__link");
    // const logo = link.closest(".navbar").querySelector("nav_logo_img");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opa;
      // logo.style.opacity = opa;
    });
  }
};
nav.addEventListener("mouseover", function (e) {
  handeleHover(e, 0.5);
});
nav.addEventListener("mouseout", function (e) {
  handeleHover(e, 1);
});

///////////////////////////////////////
// Lazy loading images
// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   if (entry.isIntersecting) {
//     entry.target.src = entry.target.dataset.src;
//     entry.target.addEventListener('load', function () {
//       entry.target.classList.remove('lazy-img');
//       observer.unobserve(entry.target);
//     });
//   }
// };
// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: '200px',
// });
// imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// modal and overlay
// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// // for (let i = 0; i < btnsOpenModal.length; i++)
// //   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
//
//////////////////////////////////////
// scrollProgressBar
function scrollProgressBar() {
  var getMax = function () {
    return $(document).height() - $(window).height();
  };

  var getValue = function () {
    return $(window).scrollTop();
  };

  var progressBar = $(".progress-bar"),
    max = getMax(),
    value,
    width;

  var getWidth = function () {
    // Calculate width in percentage
    value = getValue();
    width = (value / max) * 100;
    width = width + "%";
    return width;
  };

  var setWidth = function () {
    progressBar.css({ width: getWidth() });
  };

  $(document).on("scroll", setWidth);
  $(window).on("resize", function () {
    // Need to reset max
    max = getMax();
    setWidth();
  });
}
scrollProgressBar();
///////////////////////////////////////////
// map footer
var map = L.map("map").setView([35.857073535334436, 50.915887891938205], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([35.857073535334436, 50.915887891938205])
  .addTo(map)
  .bindPopup("kharazmi university,<br> Technical College")
  .openPopup();
