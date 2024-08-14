const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor de prueba funcionando');
});

app.listen(5000, () => console.log('Servidor de prueba en puerto 5000'));