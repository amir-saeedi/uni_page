const express = require("express");
const app = express();
const path = require("path");
//
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.render("home");
});
/////////
app.listen(1000, () => {
  console.log("Listening on port 1000");
});
