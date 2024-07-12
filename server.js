const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mongoConfig = require("./config/mongoConfig");

const rootRouter = require('./routes');
const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL || "http://localhost:3000"],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(bodyParser.json());

app.use('/api', rootRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`node env: ${process.env.NODE_ENV}`);
  console.log(`server listening on port ${port}`);
});