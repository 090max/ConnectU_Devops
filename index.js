const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, (req, res) => {
  console.log("Server running on ..", PORT);
});
