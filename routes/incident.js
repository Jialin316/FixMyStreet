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
    const incidents = await Incident.find({})
    const date = new Date();
    const { passed } = req.query;
    res.render("signalisation.ejs", {req: req, incidents: incidents, isPassed: passed, now: date.toLocaleDateString('fr-FR', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})});
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