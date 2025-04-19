// routes/webhook.js
// Ruta para recibir webhooks de Twilio (WhatsApp)
// Aquí se implementará el endpoint para recibir mensajes de WhatsApp
// Ejemplo de estructura:
const express = require('express');
const router = express.Router();

router.post('/webhook', (req, res) => {
  // Lógica para manejar mensajes entrantes de Twilio
  res.sendStatus(200);
});

module.exports = router;