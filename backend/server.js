require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db');
const Message = require('./models/message');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
db.connect();

app.post('/api/contact', async (req, res) => {
  const { nombre, apellido, telefono, email, tipoServicio, mensaje } = req.body;

  try {
    // Guardar en la base de datos
    const newMessage = new Message({ nombre, apellido, telefono, email, tipoServicio, mensaje });
    await newMessage.save();
    console.log('Mensaje guardado en la base de datos');
    res.status(200).send('Mensaje guardado con éxito');
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    res.status(500).send('Error al guardar el mensaje');
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));