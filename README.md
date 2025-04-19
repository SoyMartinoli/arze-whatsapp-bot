# arze-whatsapp-bot

Backend profesional para el bot de WhatsApp de Grupo Arze.

## ¿Qué hace este proyecto?
- Atiende leads de WhatsApp usando Twilio
- Responde con IA usando OpenRouter
- Preparado para Google Sheets y Google Calendar
- 100% en la nube (Railway + GitHub)

## Estructura de carpetas
- `index.js`: Servidor principal Express
- `utils/`: Utilidades para OpenRouter y Twilio
- `routes/`: Rutas para webhooks (Twilio)
- `.env.example`: Ejemplo de configuración de variables de entorno

## ¿Cómo ejecutarlo localmente?
1. Copia `.env.example` a `.env` y completa tus claves.
2. Instala dependencias:
   ```
   npm install
   ```
3. Inicia el servidor:
   ```
   npm start
   ```
4. Abre en tu navegador: http://localhost:3000

## Despliegue en Railway
- Solo conecta tu repo de GitHub a Railway y despliega. No necesitas cambiar nada.

## Notas importantes
- No subas `.env` a GitHub.
- El puerto se configura automáticamente para Railway (`process.env.PORT || 3000`).
- Todo está documentado y listo para escalar.