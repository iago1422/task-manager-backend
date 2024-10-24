const db = require('../config/firebaseConfig');

async function insertTasks(tasks) {
  const batch = db.batch();
  tasks.forEach(task => {
    const docRef = db.collection('tasks').doc();
    batch.set(docRef, task);
  });
  await batch.commit();
}

async function getTasks() {
  const snapshot = await db.collection('tasks').get();
  const tasks = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return tasks;
}

module.exports = { insertTasks, getTasks };
