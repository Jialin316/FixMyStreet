// Création du routeur
const express = require("express");
const router = express.Router()
// Import du model Incident
const Incident = require("../models/Incident");

// Page d'ajout d'incident
router.get("/", function (req, res) {
    res.render("templates/signalisation.ejs");
});

// Route pour ajouter un incident
router.post("/add", async (req, res) => {
    const { incidentId, description, type, dateTime, injuries, location, reportedBy } = req.body;
    try {
    const newIncident = new Incident({ incidentId, description, type, dateTime, injuries, location, reportedBy });
    await newIncident.save();
    res.status(201).send("Incident ajouté avec succès");
    } catch (error) {
    res.status(500).send("Erreur lors de l'ajout de l'incident : " + error.message);
    }
});


// Exporte le modula afin de pouvoir l'utiliser dans server.js
module.exports = router