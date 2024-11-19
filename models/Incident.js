const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  incidentId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  dateTime: { type: Date, required: true },
  localisation: { type: String, required: true },
  reportedBy: { type: String, required: true }
});

module.exports = mongoose.model('Incident', incidentSchema);
