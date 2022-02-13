const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactusSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
const Contactus = mongoose.model("Contactus", ContactusSchema);

module.exports = Contactus;
