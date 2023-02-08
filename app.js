const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.redirect("home");
});
app.get("/home", (req, res) => {
  res.render("home", {
    title: "Home",
    css: ["home"],
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    css: ["about"]
  });
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.listen(3000);
