const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");
const app = express();

//init Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

//init db

//init routes
app.get("/", (req, res, next) => {
  const initString = "Hello world";
  return res.status(200).json({
    message: "Welcome Thuy",
    metadata: initString.repeat(10000),
  });
});

//handling error

module.exports = app;
