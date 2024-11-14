// Création de l'application
const express = require("express");
const app = express();

// Set l'app pour supporter ejs
app.set('view engine', 'ejs');

// Page d'accuil
app.get("/", function(req, res) {
    res.render("templates/acceuil.ejs");
});

// Page de connexion
app.get("/connexion", function(req, res) {
    res.render("templates/connexion.ejs");
});

// Page d'ajout d'incident
app.get("/signal", function(req, res) {
    res.render("templates/signalisation.ejs");
});


app.use(express.static('views'));
// Lance le serveur sur le port 8080
app.listen(8080);