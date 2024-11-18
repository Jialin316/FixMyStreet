const mongoose = require('mongoose');
const session = require("express-session")
const MongoDBSession = require("connect-mongodb-session")(session)


const mongoURI = 'mongodb://localhost:27017/fixmystreet';

mongoose.connect(mongoURI)
  .then(() => console.log("Connexion à MongoDB réussie"))
  .catch(err => console.error("Erreur de connexion à MongoDB :", err));

const store = new MongoDBSession({
  uri: mongoURI,
  collection: "sessions"
})

module.exports = {mongoose, store}
