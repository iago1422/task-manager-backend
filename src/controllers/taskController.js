const taskService = require('../services/taskService');
const { validateTaskInput } = require('../validators/taskValidator');

async function insertTasks(req, res) {
  try {
    const tasks = req.body;

    // Validação dos dados de entrada
    const { error } = validateTaskInput(tasks);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Insere as tarefas via serviço
    await taskService.insertTasks(tasks);
    res.status(201).json({ message: 'Task criada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro:', error: error.message });
  }
}

async function getTasks(req, res) {
  try {
    const tasks = await taskService.getTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro:', error: error.message });
  }
}

module.exports = { insertTasks, getTasks };
