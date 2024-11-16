// Création du routeur
const express = require("express");
const router = express.Router()
// Import du model User
const User = require("../models/User");
const bcrypt = require("bcrypt"); // hachageee mdp

// Route d'inscription
router.post("/register", async (req, res) => {
    const { username, email, phone, password, fullName } = req.body;
    try {
        // Vérifier si l'utilisateur ou l'email existe déjà
        if (await User.findOne({ username })) 
            return res.status(400).send("Ce nom d'utilisateur existe déja");
        if (await User.findOne({ email })) 
            return res.status(400).send("Cet email est déjà utilisé.");

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur
        const newUser = new User({ username, email, phone, password: hashedPassword, fullName });
        await newUser.save();

        res.status(201).send("Compte créé avec succès");
    } catch (error) {
        res.status(500).send("Erreur lors de la création du compte : " + error.message);
    }
});

// Page de connexion
router.get("/login", (req, res) => {
    res.render("templates/connexion.ejs");
});

// Backend de la page de connexion
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Rechercher si l'email existe deja
        const user = await User.findOne({ email });
        if (!user)
            return res.status(400).send("Email ou mot de passe incorrect.");

        // Vérifier le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).send("Email ou mot de passe incorrect.");

        // Si email et mot de passe correct
        res.status(200).send("Connexion réussie");

    } catch (error) {
        res.status(500).send("Erreur lors de la connexion : " + error.message);
    }
});

// Exporte le modula afin de pouvoir l'utiliser dans server.js
module.exports = router