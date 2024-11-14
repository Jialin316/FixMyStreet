const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  incidentId: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  dateTime: { type: Date, required: true },
  injuries: { type: Number, required: true },
  location: { type: String, required: true },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Incident', incidentSchema);
