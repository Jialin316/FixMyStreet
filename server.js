// Importation des modules nécessaires
const express = require("express");
const {mongoose, store} = require("./database")
const session = require("express-session")
const Incident = require("./models/Incident");


// creation  de l'application Express
const app = express();
// Pour pouvoir parser les données
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Gestion des sessions
app.use(session({
    secret: "my random secret key",
    cookie: {maxAge: 86400000 },
    resave: false,
    saveUninitialized: false,
    store: store
}))

// Set l'app pour supporter ejs
app.set("view engine", "ejs");
// Utilise les fichier static
app.use(express.static("public"));

// Page d'accueil
app.get("/", async function (req, res) {
    res.render("acceuil.ejs", {req: req, incidents: await Incident.find({})});
});

// Routes pour les pages d'utilisateurs
const incidentRouter = require("./routes/incident")
app.use("/incident", incidentRouter)

// Routes pour les pages d'utilisateurs
const userRouter = require("./routes/user")
app.use("/user", userRouter)

app.get

// Lance le serveur sur le port choisi
const portNum = 8080
app.listen(portNum, () => console.log("L'application est lancé sur http://localhost:" + portNum))
