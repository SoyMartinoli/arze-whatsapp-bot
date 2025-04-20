// index.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080; // Railway espera 8080 por defecto

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta principal para verificar que el bot funciona
app.get('/', (req, res) => {
  res.send('Bot de Grupo Arze corriendo correctamente ✅');
});

// Ruta webhook para recibir mensajes de WhatsApp desde Twilio
app.post('/twilio/webhook', (req, res) => {
  console.log('📩 Mensaje recibido de Twilio:', req.body);
  res.status(200).send('Mensaje recibido ✅');
});

// 🔥 Esta es la parte que estaba mal — ya corregida
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

