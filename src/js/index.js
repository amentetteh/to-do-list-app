import '../css/style.css';
import TaskController from './modules/controller/taskcontroller.js';
import Task from './modules/model/task.js';

// Add a new task
const taskList = document.querySelector('#tasks-list');

document
  .querySelector('#new-item-field')
  .addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const desc = document.querySelector('#new-item-field').value;
      event.preventDefault();
      TaskController.addTask(taskList, desc);
    }
  });

document.querySelector('.clear-all-completed').addEventListener('click', () => {
  TaskController.removeAllCompletedTask(taskList);
});

if (Task.count() > 0) {
  document.addEventListener('DOMContentLoaded', () => {
    const isDataOrdered = localStorage.getItem('isDataOrdered') || true;
    localStorage.setItem('isDataOrdered', isDataOrdered);

    // TaskController.buildTaskList(taskList, Task.getAll());
    TaskController.resetDisplayTasks(taskList);
  });
}
