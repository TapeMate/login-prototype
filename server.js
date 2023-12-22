const express = require("express");
const app = express();

// setup to use ejs syntax
app.set("view-engine", "ejs");

// setup rout for rendering
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Kyle" });
});

app.listen(3000);
