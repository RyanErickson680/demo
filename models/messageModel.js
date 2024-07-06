const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  message: {
    type: String,
    required: true,
  },
});
