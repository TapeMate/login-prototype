const express = require("express");
const app = express();

// setup to use ejs syntax
app.set("view-engine", "ejs");

// setup rout for rendering
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Kyle" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.listen(3000);
