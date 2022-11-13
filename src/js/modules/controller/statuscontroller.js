import Task from '../model/task.js';

class StatusController {
  static taskList = document.querySelector('#tasks-list');

  static updateStatus = (task, status) => {
    const newTask = new Task(task.index, task.description, task.completed);
    if (newTask) {
      newTask.setCompleted(status);
    }
  }
}

export default StatusController;
