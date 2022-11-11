import Task from "../model/task.js";

class TaskController {
  static createTag = (tagName, textContent = null, className = null) => {
    const tag = document.createElement(tagName);
    tag.textContent = textContent;
    tag.className = className;
    return tag;
  };

  static createTaskRow = (task) => {
    console.log(task);
    const taskRow = TaskController.createTag("li", null, "task-item");
    const taskForm = TaskController.createTag("form", null, "task-form");
    const descriptionElement = TaskController.createTag(
      "input",
      null,
      "item description"
    );
    descriptionElement.type = "text";
    descriptionElement.name = "description";
    const indexElement = TaskController.createTag("div", null, "item index");
    const completedElement = TaskController.createTag("div", null, "item completed");

    const dragNdrop = TaskController.createTag(
      "span",
      null,
      "fas fa-ellipsis-v vertical-3-dot"
    );
    const deleteIcon = TaskController.createTag(
      "span",
      null,
      "fa fa-trash-o delete-icon"
    );

    const checkboxElement = TaskController.createTag("input", null, "check-input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = "completed";

    console.log(task.completed);
    checkboxElement.checked = task.completed;
    /*checkboxElement.addEventListener("change", (event) => {
      TaskController.resetForRemove();
      const newTask = new Task(task.index, task.description, task.completed);
      console.log('**********************')
      console.log(newTask)
      if(newTask){
        newTask.setCompleted(checkboxElement.checked);
        console.log(newTask)
      }
 
    });*/

    descriptionElement.value = task.description;
    indexElement.innerText = task.index;
    completedElement.innerText = task.completed;

    const rowItems = [
      checkboxElement,
      descriptionElement,
      indexElement,
      completedElement,
    ];

    for (let j = 0; j < rowItems.length; j += 1) {
      taskForm.appendChild(rowItems[j]);
    }

    taskForm.addEventListener("click", (event) => {
      TaskController.resetForRemove();
      taskRow.classList.toggle("editing");
      dragNdrop.classList.toggle("hidden");
      deleteIcon.classList.toggle("show");
    });

    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    descriptionElement.addEventListener("change", (event) => {
     event.preventDefault();
     console.log('CHAAAAAAAAAAAAAAAAAAAAANNNNNNNNNNNNNNNNNNNNNGGGGGGGGGGGGEEEEEEEEEEE')
     const form=event.target.parentElement
     const index =parseInt(form.getElementsByTagName('div')[0].innerText)
     const description =form.description.value
     const completed =(form.getElementsByTagName('div')[1].innerText==='true')
     const task=new Task(index,description,completed)
     task.save()
    });

    deleteIcon.addEventListener("click", (event) => {
      TaskController.removeTask(task);
      TaskController.removeTaskFromUI(event.target)
    });

    taskRow.appendChild(taskForm);
    taskRow.appendChild(dragNdrop);
    taskRow.appendChild(deleteIcon);
    return taskRow;
  };

  static resetForRemove = () => {
    document.querySelectorAll(".task-item").forEach((item) => {
      item.classList.remove("editing");
    });

    document.querySelectorAll(".vertical-3-dot").forEach((item) => {
      item.classList.remove("hidden");
    });

    document.querySelectorAll(".delete-icon").forEach((item) => {
      item.classList.remove("show");
    });
  };

  static buildTaskList = (table, tasks) => {
    if (tasks && tasks.length > 0) {
      for (let i = 0; i < tasks.length; i += 1) {
        table.appendChild(TaskController.createTaskRow(tasks[i]));
      }
    }
  };

  static resetSection = (sectionArray, classArray) => {
    for (let i = 0; i < sectionArray.length; i += 1) {
      for (let j = 0; j < classArray.length; j += 1) {
        sectionArray[i].classList.remove(classArray[j]);
      }
    }
  };


  static removeTask = (task) => {
    const newTask = new Task(task.index, task.description, task.completed);
    newTask.remove();
  };

  static removeTaskFromUI = (item) => {
    if (item.classList.contains("delete-icon")) {
      item.parentElement.remove();
    }
  };

  static addTaskToUI = (table, book) => {
    table.appendChild(TaskController.createTaskRow(book));
  };

  //Implement a function for adding a new task (add a new element to the array).
  static addTask = (table, description) => {
    if (description) {
      const task = new Task(null, description, false);
      console.log(task);
      task.add();
      TaskController.addTaskToUI(table, task);

      document.querySelector("#new-item-field").value = "";
    }
  };
}

export default TaskController;
