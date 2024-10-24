const request = require('supertest');
const express = require('express');
const taskRoutes = require('../src/routes/taskRoutes');

const app = express();
app.use(express.json());
app.use(taskRoutes);

describe('Task API', () => {
  test('POST /insert-tasks should insert a task', async () => {
    const tasks = [
      { description: 'Test task', responsable: 'testUser', status: 'todo' }
    ];

    const response = await request(app)
      .post('/insert-tasks')
      .send(tasks);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('message');
  });

  test('GET /get-tasks should return tasks', async () => {
    const response = await request(app).get('/get-tasks');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
