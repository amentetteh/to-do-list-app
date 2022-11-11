class Task {
  constructor(index, description, completed = false) {
    this.index =index;
    this.description = description;
    this.completed = completed;
  }

  static getAll() {
    const Tasks = localStorage.getItem('tasks');
    return (Tasks === null) ? [] : JSON.parse(Tasks);
  }

  add() {
    const tasks = Task.getAll();
    this.index=Task.count() + 1
    tasks.push(this);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return this;
  }

  remove() {
    const tasks = Task.getAll();
    tasks.forEach((task, index) => {
      if (parseInt(task.index, 10) === parseInt(this.index, 10)) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  save() {
    const tasks = Task.getAll();
     tasks[this.index-1].description = this.description
    tasks[this.index-1].completed = this.completed
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  setCompleted(boolean){
    this.completed=boolean
    this.save()
    return this
  }

  static count() {
    return this.getAll().length;
  }

  static isOrdered(){
    return localStorage.getItem('isDataOrdered');
  }

}
export default Task;