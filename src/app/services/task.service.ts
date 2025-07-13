import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {}

  private tasks: Array<Task> = [];

  getTasks(): Array<Task> {
    
    this.tasks = this.getFromLocalStorage();

    return this.tasks;

  }
  
  getById(id  : number): Task | undefined {

    const task = this.tasks.find(c => c.id === id);
   
    return task;

  }


  addTask(task: Task) {

    task.id = this.tasks.length + 1; // Define um ID único para a nova tarefa

    this.tasks.push(task);
    
    this.saveLocalStorage();
  }

  updateTask() {
    this.saveLocalStorage();
  }

  removeTask(Task: Task) {

    const index = this.tasks.indexOf(Task);

    if (index !== -1) {
      //achou o elemento, remove ele
      this.tasks.splice(index, 1);

      this.saveLocalStorage();
    }  
  }

  private saveLocalStorage() {

    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
  }


  private getFromLocalStorage(): Array<Task> {

    const tasksJson = localStorage.getItem('tasks');
    if (!tasksJson) {
      // Não achou nada no localStorage
      return new Array<Task>();
    }
    return JSON.parse(tasksJson);

  }

}
