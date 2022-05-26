const navPadding = function (nav, header) {
  // padding top for header
  header.style.paddingTop = nav.offsetHeight + "px";
  if (screen.width <= 1000) {
    header.style.paddingTop = 107 + "px";
  }
};

const fadeLogo = function () {
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
};

// Menu fade animation
const fadeMenu = function (nav) {
  const handeleHover = function (e, opa) {
    e.preventDefault();
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const siblings = link.closest(".navbar").querySelectorAll(".nav__link");
      // const logo = link.closest(".navbar").querySelector("nav_logo_img");
      siblings.forEach((el) => {
        if (el === link) el.classList.add("hvr-grow");
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
};
export { navPadding, fadeLogo, fadeMenu };
