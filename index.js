// index.js
// Backend principal para el bot de WhatsApp de Grupo Arze
// Servidor Express listo para Railway y despliegue en la nube
//
// Cómo ejecutar localmente:
// 1. Copia el archivo .env.example a .env y completa tus claves.
// 2. Ejecuta: npm start
// 3. Abre http://localhost:3000 o el puerto que definas en .env

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Ruta principal para verificar que el bot funciona
app.get('/', (req, res) => {
  res.send('Bot de Grupo Arze corriendo correctamente ✅');
});

// Iniciar el servidor
app.listen(PORT, () => {
  // Solo se permite este console.log según las reglas
  console.log('Servidor corriendo en http://localhost:' + PORT);
});

// Documentación:
// - Este archivo es el punto de entrada del backend.
// - Usa Express para crear un servidor web.
// - La ruta GET / responde con un mensaje de estado.
// - El puerto se configura con process.env.PORT o 3000 por defecto.
// - Listo para Railway y despliegue en la nube.
