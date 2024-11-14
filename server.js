// Importation des modules nécessaires
const express = require("express");
const mongoose =require('./database');
const bcrypt = require("bcrypt"); // hachageee mdp
const User = require("./models/User");
const Incident = require("./models/Incident");


// creation  de l'application Express
const app = express();
app.use(express.json()); // pour parser les donnees json 

// Set l'app pour supporter ejs
app.set('view engine', 'ejs');
// servir le css 
app.use(express.static('views/static'));



// Page d'accueil
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


// Route d'inscription
app.post('/register', async (req, res) => {
    const { username, email, phone, password, fullName } = req.body;
    try {
      // Vérifier si l'utilisateur ou l'email existe déjà
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send('Cet email est déjà utilisé.');
      }
  
      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Créer un nouvel utilisateur
      const newUser = new User({ username, email, phone, password: hashedPassword, fullName });
      await newUser.save();
  
      res.status(201).send('Compte créé avec succès');
    } catch (error) {
      res.status(500).send('Erreur lors de la création du compte : ' + error.message);
    }
  });
  
  // Route de connexion
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      // Rechercher l'utilisateur par email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).send('Email ou mot de passe incorrect.');
      }
  
      // Vérifier le mot de passe
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send('Email ou mot de passe incorrect.');
      }
  
      res.status(200).send('Connexion réussie');
    } catch (error) {
      res.status(500).send('Erreur lors de la connexion : ' + error.message);
    }
  });
  
  // Route pour ajouter un incident
  app.post('/incident', async (req, res) => {
    const { incidentId, description, type, dateTime, injuries, location, reportedBy } = req.body;
    try {
      const newIncident = new Incident({
        incidentId,
        description,
        type,
        dateTime,
        injuries,
        location,
        reportedBy
      });
      await newIncident.save();
      res.status(201).send('Incident ajouté avec succès');
    } catch (error) {
      res.status(500).send('Erreur lors de l’ajout de l’incident : ' + error.message);
    }
  });
  
 


// Lance le serveur sur le port 8080
app.listen(8080);