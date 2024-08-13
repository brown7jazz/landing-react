const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  telefono: String,
  email: String,
  tipoServicio: String,
  mensaje: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);