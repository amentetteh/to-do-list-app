class Task {
  constructor(index, description, completed=false) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  static getAll() {
    const Tasks = localStorage.getItem('tasks');
    return (Tasks === null) ? [] : JSON.parse(Tasks);
  }

  add() {
    const Tasks = Task.getAll();
    this.index = Task.count() + 1;
    Tasks.push(this);
    localStorage.setItem('tasks', JSON.stringify(Tasks));
    return this;
  }

  remove() {
    const Tasks = Task.getAll();
    Tasks.forEach((Task, index) => {
      if (parseInt(Task.index, 10) === parseInt(this.index, 10)) {
        Tasks.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(Tasks));
  }

  static count() {
    return this.getAll().length;
  }
}
export default Task;