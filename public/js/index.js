import {
  navPadding,
  fadeLogo,
  fadeMenu,
  scrollProgressBar,
} from "./main/navbarJS.js";
import homeJs from "./main/homeJs.js";
import courseJs from "./main/courseJS.js";
import blogJs from "./main/blogJs.js";
import aparatJs from "./main/aparatJS.js";
// import aboutJs from "./main/aboutJs.js";
// import technicJs from "./main/technicJs.js";

import owlJS from "./partials/owlJS.js";
import mapJS from "./partials/mapJS.js";
import loadImgJs from "./partials/loadImgJs.js";

///////////////////////////////////////////////
// nav bar
const nav = document.querySelector(".navbar");
const header = document.querySelector(".header");
navPadding(nav, header);
fadeLogo();
fadeMenu(nav);
scrollProgressBar();
//  pages js
if (document.getElementById("H_header")) {
  // home page
  homeJs();
} else if (document.getElementById("About_header")) {
  // about page
  // aboutJs() ***
} else if (document.getElementById("technic_header")) {
  // technic page
  // technicJs() ***
} else if (document.getElementById("cours_header")) {
  // courses page
  courseJs();
} else if (document.getElementById("blog_header")) {
  // blog page
  blogJs();
} else if (document.getElementById("َAparat_header")) {
  aparatJs();
}
///////////////////////////////////////////
// owl
owlJS();
// map footer
mapJS();
// load images after all *
loadImgJs();
/////////////////////////////////////////////
