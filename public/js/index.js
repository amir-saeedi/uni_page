// padding top for header
const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");
header.style.paddingTop = nav.offsetHeight + "px";
if (screen.width <= 1000) {
  header.style.paddingTop = 100 + "px";
}
// owl
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
///////////////////////////////////////////////
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
if (document.getElementById("blog_header")) {
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
////////////////////////////////////////////
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

//
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
//////////////////////////////////////////////////
// load images after all *
if (!document.querySelector(".image_important")) {
  $(function () {
    $.each(document.images, function () {
      var this_image = this;
      console.log(this_image);
      var src = $(this_image).attr("src") || "";
      if (!src.length > 0) {
        // this_image.src = options.loading; // show loading
        var lsrc = $(this_image).attr("lsrc") || "";
        if (lsrc.length > 0) {
          var img = new Image();
          img.src = lsrc;
          $(img).load(function () {
            this_image.src = this.src;
          });
        }
      }
    });
  });
}
