class Task {
  constructor(index, description, completed = false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  static getAll(order = 'ASC') {
    const tasks = localStorage.getItem('tasks');
    const finalTasks = tasks === null ? [] : JSON.parse(tasks);
    if (tasks) {
      if (order && order === 'ASC') {
        return finalTasks.sort(
          (t1, t2) => {
            if (t1.index > t2.index) {
              return 1;
            }
            if (t1.index < t2.index) {
              return -1;
            }
            return 0;
          },
        );
      }
      return finalTasks.sort((t2, t1) => {
        if (t1.index > t2.index) {
          return 1;
        }
        if (t1.index < t2.index) {
          return -1;
        }
        return 0;
      });
    }
    return finalTasks;
  }

  add() {
    const tasks = Task.getAll('ASC');
    this.index = Task.count();
    tasks.push(this);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return this;
  }

  remove() {
    const tasks = Task.getAll('ASC');
    tasks.forEach((task, index) => {
      if (parseInt(task.index, 10) === parseInt(this.index, 10)) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static deleteAllByStatus(status) {
    const tasks = Task.getAll('ASC');
    localStorage.setItem('tasks', JSON.stringify(tasks.filter((task) => task.completed !== status)));
  }

  save() {
    const tasks = Task.getAll();
    tasks[this.index].description = this.description;
    tasks[this.index].completed = this.completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  setCompleted(boolean) {
    this.completed = boolean;
    this.save();
    return this;
  }

  static count() {
    return this.getAll().length;
  }

  static isOrdered() {
    return localStorage.getItem('isDataOrdered');
  }

  static updateIndexes() {
    const sorted = this.getAll('ASC');
    sorted.forEach((task, index) => {
      task.index = index;
    });
    localStorage.setItem('tasks', JSON.stringify(sorted));
  }
}
export default Task;
