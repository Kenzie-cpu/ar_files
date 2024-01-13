var express = require("express");
var app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Optional: Explicitly serve 'index.html' for the root URL
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/es-02", function (req, res) {
  res.sendFile(__dirname + "/public/es-02.html");
});

app.get("/wall_planter", function (req, res) {
  res.sendFile(__dirname + "/public/wall_planter.html");
});

app.get("/ms-01", function (req, res) {
  res.sendFile(__dirname + "/public/m-01.html");
});

app.listen(80, function () {
  console.log("listening on port 80");
});
