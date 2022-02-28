if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");

const Contactus = require("./models/contactus.js");
//
// const dbUrl = "mongodb://localhost:27017/uni-khu";
const dbUrl = process.env.DB_URL || "mongodb://0.0.0.0:27017/uni-khu";
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});
//
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});
app.post("/about", async (req, res) => {
  const newContact = new Contactus(req.body);
  // await newContact.save();
  res.redirect("/about");
});

//
app.get("/courses", (req, res) => {
  res.render("courses");
});
app.get("/technic", (req, res) => {
  res.render("technic");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
/////////
app.listen(process.env.PORT || 1000, () => {
  console.log(`Listening on port ${process.env.PORT || 1000}`);
});
