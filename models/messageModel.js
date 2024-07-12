const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
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
  },
  { collection: 'messages' }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
