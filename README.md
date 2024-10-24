# Task Manager Backend

Este é o backend de uma aplicação de gerenciamento de tarefas construída com Node.js, Express e Firestore.

## Pré-requisitos

- **Node.js 20+**
- **Firebase Project** configurado com credenciais para acesso ao Firestore
- **Docker** (opcional, para execução em container)

## Configuração do Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/iago1422/task-manager-backend.git
   cd task-manager-backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o servidor:

   ```bash
   npm start
   ```

---

## Endpoints

### Inserir Tarefas

- **Endpoint:** `POST /insert-tasks`
- **Descrição:** Insere uma ou mais tarefas no Firestore.
- **Exemplo de Entrada:**

  ```json
  [
    { "description": "Criar Login", "responsable": "iago", "status": "done" },
    { "description": "Criar Menu", "responsable": "iago", "status": "doing" }
  ]
  ```

- **Exemplo de Saída:**

  ```json
  { "message": "Tasks criada com sucesso!" }
  ```

### Obter Tarefas

- **Endpoint:** `GET /get-tasks`
- **Descrição:** Retorna todas as tarefas armazenadas no Firestore.
- **Exemplo de Saída:**

  ```json
  [
    {
      "id": "1",
      "description": "Criar CRUD",
      "responsable": "iago",
      "status": "done",
      "computer": "iago"
    },
    {
      "id": "2",
      "description": "Criar Login",
      "responsable": "iago",
      "status": "done",
      "computer": "iago"
    }
  ]
  ```

---

## Testes

Este projeto utiliza **Jest** para testes unitários e de integração.

### Executar os testes

Para rodar os testes, execute o seguinte comando:

```bash
npm test
```

---

## Docker (Opcional)

Se preferir, você pode rodar a aplicação usando Docker:

1. Crie uma imagem Docker:

   ```bash
   docker build -t task-manager-backend .
   ```

2. Execute a aplicação em um container:

   ```bash
   docker run -p 8085:8085 task-manager-backend
   ```

---
