const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const qustionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  qustion: {
    type: String,
    required: true,
  },
  time: { type: Date, default: Date.now },
});
const Qustionus = mongoose.model("Qustionus", qustionSchema);

module.exports = Qustionus;
