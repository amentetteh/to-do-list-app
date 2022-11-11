// import Book from './model/task.js';

class View {
  static createTag = (tagName, textContent = null, className = null) => {
    const tag = document.createElement(tagName);
    tag.textContent = textContent;
    tag.className = className;
    return tag;
  };

  static createTaskRow = (task) => {
    const taskRow = View.createTag('li', null, 'task-item');
    const taskForm = View.createTag('form', null, 'task-form');
    const descriptionElement = View.createTag('input', null, 'item description');
    descriptionElement.type = 'text';
    descriptionElement.name = 'description';
    const indexElement = View.createTag('div', null, 'item index');
    const completedElement = View.createTag('div', null, 'item completed');

    const dragNdro = View.createTag('div', null, 'fas fa-ellipsis-v pull-right vertical-3-dot');

    const checkboxElement = View.createTag('input', null, 'check-input');
    checkboxElement.type = 'checkbox';
    checkboxElement.name = 'name';

    checkboxElement.checked = task.completed;
    // checkboxElement.addEventListener('change', (event) => {
    //   console.log('CHECKKEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDD')
    // });

    /*     taskForm.addEventListener('change', (event) => {
      console.log('CHECKKEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDD')
    }); */

    descriptionElement.value = task.description;
    indexElement.innerText = task.index;
    completedElement.innerText = task.completed;

    const rowItems = [checkboxElement, descriptionElement, indexElement, completedElement];

    for (let j = 0; j < rowItems.length; j += 1) {
      taskForm.appendChild(rowItems[j]);
    }
    taskRow.appendChild(taskForm);
    taskRow.appendChild(dragNdro);
    return taskRow;
  };

  static buildTaskList = (table, tasks) => {
    if (tasks && tasks.length > 0) {
      for (let i = 0; i < tasks.length; i += 1) {
        table.appendChild(View.createTaskRow(tasks[i]));
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

  static displaySection = (section, sectionArray) => {
    if (!section.classList.contains('show')) {
      section.classList.toggle('show');
    }
    for (let i = 0; i < sectionArray.length; i += 1) {
      if (sectionArray[i] !== section) {
        if (!sectionArray[i].classList.contains('hidden')) {
          sectionArray[i].classList.toggle('hidden');
        }
      }
    }
  };

  static removeBookFromUI = (item) => {
    if (item.classList.contains('buttonRemove')) {
      item.parentElement.parentElement.remove();
    }
  };
}

export default View;
