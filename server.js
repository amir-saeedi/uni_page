if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
//
const nodemailer = require("nodemailer");

const Contactus = require("./models/contactus.js");
const Qustionus = require("./models/qustions.js");
//
const emailSend = function (newContact) {
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "uni.khu2022@gmail.com", // generated ethereal user
        pass: "Amir@1381", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "uni.khu2022@gmail.com", // sender address
      to: "uni.khu2022@gmail.com", // list of receivers
      subject: `${newContact.name} sent you a message`, // Subject line
      html: `<b>Name: ${newContact.name} </b><br/> <b>Email: ${newContact.email} </b><br/> Message: ${newContact.description} `, // html body
      // text: `${newContact.name} sent you a message`, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  main().catch(console.error);
};

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
  await newContact.save();
  emailSend(newContact);
  res.redirect("/about");
});
app.get("/courses", (req, res) => {
  res.render("courses");
});
app.get("/technic", (req, res) => {
  res.render("technic");
});
app.get("/blog", (req, res) => {
  res.render("blog");
});
app.get("/aparat", (req, res) => {
  res.render("aparat");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.post("/contact", async (req, res) => {
  const newContact = new Qustionus(req.body);
  await newContact.save();
  // emailSend(newContact)
  res.redirect("/");
});
// app.get("/conference", (req, res) => {
//   res.render("conference");
// });
/////////
app.listen(process.env.PORT || 1000, () => {
  console.log(`Listening on port ${process.env.PORT || 1000}`);
});
