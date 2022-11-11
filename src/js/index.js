import '../css/style.css';
import View from './modules/view.js';

const tasks = [
  {
    index: 1,
    description: 'Wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'Complete To Do list project',
    completed: false,
  },
  {
    index: 3,
    description: 'Wash the dishes',
    completed: false,
  },
  {
    index: 4,
    description: 'Complete To Do list project',
    completed: false,
  },
];

const taskList = document.querySelector('#tasks-list');
if (tasks.length > 0) {
  document.addEventListener('DOMContentLoaded', View.buildTaskList(taskList, tasks));
}
