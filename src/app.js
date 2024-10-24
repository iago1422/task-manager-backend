// src/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Importa o middleware de CORS
const TaskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

// Habilitar o CORS para todas as origens
app.use(cors());

app.use(TaskRoutes);

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
