 // Création du routeur
const express = require("express");
const router = express.Router()
const session = require("express-session")
// Import du model User
const User = require("../models/User");
const bcrypt = require("bcrypt"); // hachageee mdp

// Route d'inscription
router.post("/register", async (req, res) => {
    const { username, email, phone, password, fullName } = req.body;
    try {
        // Vérifier si l'utilisateur ou l'email existe déjà
        if (await User.findOne({ username })) 
            return res.redirect("login?valid=1");
        if (await User.findOne({ email })) 
            return res.redirect("login?valid=2");
        if (await User.findOne({ phone })) 
            return res.redirect("login?valid=3");

        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer un nouvel utilisateur
        const newUser = new User({ username, email, phone, password: hashedPassword, fullName });
        await newUser.save();

        req.session.isAuth = true;
        req.session.user = {username: username, phone: phone}
        res.status(200).redirect("/");
    } catch (error) {
        res.status(500).send("Erreur lors de la création du compte : " + error.message);
    }
});

// Page de connexion
router.get("/login", (req, res) => {
    const { valid, email } = req.query;
    res.render("connexion.ejs", {req: req, isvalid: valid, email});
});

// Backend de la page de connexion
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        // Rechercher si l'email existe deja
        const user = await User.findOne({ email });
        if (!user)
            return res.redirect("login?valid=0&email=" + email);

        // Vérifier le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.redirect("login?valid=0&email=" + email);

        // Si email et mot de passe correct
        req.session.isAuth = true;
        req.session.user = {username: user.username, phone: user.phone}
        res.status(200).redirect("/");

    } catch (error) {
        res.status(500).send("Erreur lors de la connexion : " + error.message);
    }
});

// Page de déconnexion
router.get("/logout", (req, res) => {
    req.session.isAuth = undefined;
    req.session.user = undefined;
    res.redirect("login")
})

// Exporte le modula afin de pouvoir l'utiliser dans server.js
module.exports = router