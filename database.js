// Importation des packages
const mongoose = require('mongoose');
const session = require("express-session")
const MongoDBSession = require("connect-mongodb-session")(session)

// URI de la database
const mongoURI = 'mongodb://localhost:27017/fixmystreet';

// Connexion de mongoose a notre MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch(err => console.error("Erreur de connexion à MongoDB :", err));

// Stocke la session dans la db
const store = new MongoDBSession({
  uri: mongoURI,
  collection: "sessions"
})

module.exports = {mongoose, store}
