const taskRepository = require('../repositories/taskRepository');
const os = require('os');

async function insertTasks(tasks) {
  const computerName = os.hostname();
  const tasksWithComputer = tasks.map(task => ({
    ...task,
    computer: computerName
  }));
  await taskRepository.insertTasks(tasksWithComputer);
}

async function getTasks() {
  return await taskRepository.getTasks();
}

module.exports = { insertTasks, getTasks };
