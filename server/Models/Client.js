const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  CIN: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  PhoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Client", ClientSchema);
