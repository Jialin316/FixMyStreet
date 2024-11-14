const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/fixmystreet';

mongoose.connect(mongoURI)
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch(err => console.error("Erreur de connexion à MongoDB :", err));

module.exports = mongoose;
