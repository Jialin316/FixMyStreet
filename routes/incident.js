// Création du routeur
const express = require("express");
const router = express.Router()
// Import du model Incident
const Incident = require("../models/Incident");

// Middleware qui permet de rediriger l'utilisateur a la page de connexion si il n'est pas connecté
const isAuth = (req, res, next) => {
    if (req.session.isAuth == true) next()
    else res.redirect("/user/login")
}

// Page d'ajout d'incident
router.get("/", isAuth, async function (req, res) {
    // Récupération des tous les incidents
    const incidents = await Incident.find({})

    // Création de la date d'aujourd'hui
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const today = `${yyyy}-${mm}-${dd}`;

    // Variable nous permettant d'indiquer à l'utilisateur si l'incident a été ajouté ou non
    const { passed } = req.query;

    res.render("signalisation.ejs", {req: req, incidents: incidents, isPassed: passed, today: today});
});

// Route pour ajouter un incident
router.post("/add", async (req, res) => {
    const { incidentId, description, dateTime, localisation, reportedBy } = req.body;
    try {
    const newIncident = new Incident({ incidentId, description,  dateTime, localisation, reportedBy });
    await newIncident.save();
    res.redirect("/incident?passed=1")
    } catch (error) {
    res.redirect("/incident?passed=0")
    }
});
// Exporte le modula afin de pouvoir l'utiliser dans server.js
module.exports = router