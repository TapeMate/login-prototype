const express = require("express");
const app = express();

// setup rout for rendering
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3000);
