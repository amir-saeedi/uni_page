if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require("path");
//
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/courses", (req, res) => {
  res.render("courses");
});
app.get("/teknick", (req, res) => {
  res.render("teknick");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
/////////
app.listen(process.env.PORT || 1000, () => {
  console.log(`Listening on port ${process.env.PORT || 1000}`);
});
