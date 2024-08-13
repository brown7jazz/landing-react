require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const cors = require('cors');
const db = require('./db');
const Message = require('./models/message');

const app = express();

app.use(cors());
app.use(express.json());

// Conectar a la base de datos
db.connect();

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
    const { nombre, apellido, telefono, email, tipoServicio, mensaje } = req.body;

  try {
    // Guardar en la base de datos
    const newMessage = new Message({ nombre, apellido, telefono, email, tipoServicio, mensaje });
    await newMessage.save();

    // Enviar email
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'carloslge@gmail.com',
        subject: `Nuevo mensaje de ${nombre} ${apellido}`,
        text: `
          Nombre: ${nombre}
          Apellido: ${apellido}
          Teléfono: ${telefono}
          Email: ${email}
          Tipo de Servicio: ${tipoServicio}
          Mensaje: ${mensaje}
        `
      });

      res.status(200).send('Mensaje enviado y guardado con éxito');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Error al procesar el mensaje');
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));