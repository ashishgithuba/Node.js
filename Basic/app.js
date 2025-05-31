const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Home Page");
});

app.get("/about", (req, res) => {
  return res.send(`Hell0 ${req.query.name}`);
});

app.listen(3000, () => console.log("Server Started on http://localhost:3000"));
