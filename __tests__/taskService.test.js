const taskService = require('../src/services/taskService');
const taskRepository = require('../src/repositories/taskRepository');

jest.mock('../src/repositories/taskRepository'); // Mocka o repositório

describe('Task Service', () => {
  test('should insert tasks and add computer name', async () => {
    const tasks = [
      { description: 'Test task', responsable: 'testUser', status: 'todo' }
    ];

    // Mocka o retorno da função de inserir no repositório
    taskRepository.insertTasks.mockResolvedValue();

    // Executa o serviço
    await taskService.insertTasks(tasks);

    // Verifica se a função do repositório foi chamada
    expect(taskRepository.insertTasks).toHaveBeenCalled();
  });
});
