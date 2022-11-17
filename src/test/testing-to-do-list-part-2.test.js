import 'jest-localstorage-mock';
import Task from '../js/modules/model/task.js'


describe('UnitTests', ()=>{
    it('edit task', ()=> {
        const task = new Task(1, 'Testing', false);
        task.add()
        const savedTasks = Task.getAll()
        const savedTask = savedTasks[0]
        let savedTask1 = new Task()
        Object.assign(savedTask1, savedTask)
        savedTask1.description='Test'
        savedTask1.save()
        const saved = Task.getAll()[0]
        expect(saved.description).toBe('Test');
    })
    
    it ('updating an item\'s \'completed\' status', ()=> {
 
        const saved = Task.getAll()[0]
        let savedTask = new Task()
        Object.assign(savedTask, saved)
        savedTask.setCompleted(true)
        const lastSaved = Task.getAll()[0]
        expect(lastSaved.completed).toBe(true);
    })
    
    it ('clear all', ()=> {


        let task = new Task(1, 'Testing1', true);
        task.add()
        task = new Task(2, 'Testing2', false);
        task.add()
        task = new Task(3, 'Testing2', true);
        task.add()
        task = new Task(4, 'Testing2', false);
        task.add()
        task = new Task(5, 'Testing2', true);
        task.add()

        Task.deleteAllByStatus(true)

        const remainingTasks = Task.getAll()
        expect(remainingTasks.length).toBe(2);
    })  

  })