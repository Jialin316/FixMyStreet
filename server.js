const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("templates/acceuil.ejs");
});

app.get("/connexion", function(req, res) {
    res.render("templates/connexion.ejs");
});

app.get("/signal", function(req, res) {
    res.render("templates/signalisation.ejs");
});



app.use(express.static('views'));
app.listen(8080);