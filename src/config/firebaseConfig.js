const admin = require('firebase-admin');
require('dotenv').config(); // Carregar as variáveis do .env

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'), // O replace é necessário para tratar as quebras de linha na chave privada
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL
  })
});

const db = admin.firestore();
module.exports = db;
