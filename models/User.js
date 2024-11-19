const mongoose = require('mongoose');

// Création de la Schema pour les comptes utilisateurs
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
