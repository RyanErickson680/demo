const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("Error connecting to mongo");
});

connection.on("connected", () => {
  console.log("Connected to database");
});


module.exports = connection;