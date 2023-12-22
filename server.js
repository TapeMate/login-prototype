const express = require("express");
const app = express();

// storing user data in local variable instead of database - dev only
const users = [];

// setup to use ejs syntax
app.set("view-engine", "ejs");

// defining way to access req variable via data from templates
app.use(express.urlencoded({ extended: false }));

// setup rout for rendering
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Kyle" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", (req, res) => {});

app.listen(3000);
