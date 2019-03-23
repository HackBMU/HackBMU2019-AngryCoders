const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const getdata = require("./components/getdata");

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://0.0.0.0:8080");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});
app.get("/games", getdata.games);
app.get("/events", getdata.events);

app.listen(4005, () => {
  console.log("Server is listening on port ");
});
