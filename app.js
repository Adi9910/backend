const express = require("express");

const app = express();

//middleware

const middleware = (req, res, next) => {
  console.log(`hello`);
  next();
};

app.get("/", (req, res) => {
  res.send(`hello world form the server`);
});
app.get("/about", middleware, (req, res) => {
  res.send(`hello world form the about`);
});
app.get("/contact", (req, res) => {
  res.send(`hello world form the contact`);
});
app.get("/login", (req, res) => {
  res.send(`hello world form the server`);
});
app.get("/register", (req, res) => {
  res.send(`hello world form the server`);
});

app.listen(3000, () => {
  console.log("runn");
});
