// src/routes/taskRoutes.js
const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

// Definir rotas chamando diretamente os métodos do controlador
router.post('/insert-tasks', taskController.insertTasks);
router.get('/get-tasks', taskController.getTasks);

module.exports = router;
