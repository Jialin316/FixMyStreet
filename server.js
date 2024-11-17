// Importation des modules nécessaires
const express = require("express");
const mongoose = require("./database")

// creation  de l'application Express
const app = express();
// Pour pouvoir parser les données
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set l'app pour supporter ejs
app.set("view engine", "ejs");
// Utilise les fichier static
app.use(express.static("public"));



// Page d'accueil
app.get("/", function (req, res) {
    res.render("acceuil.ejs");
});

// Routes pour les pages d'utilisateurs
const incidentRouter = require("./routes/incident")
app.use("/incident", incidentRouter)

// Routes pour les pages d'utilisateurs
const userRouter = require("./routes/users")
app.use("/users", userRouter)



// Lance le serveur sur le port choisi
const portNum = 8080
app.listen(portNum, () => console.log("L'application est lancé sur http://localhost:" + portNum))
