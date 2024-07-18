import { Injectable } from '@angular/core';
import { Task } from './task.model';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasks?: Task[];
  constructor() { }
  addTask(title: string, description: string){
    console.log('i work(task service add task)');
    if(this.tasks){
      this.tasks.push({id: JSON.stringify(+this.tasks[this.tasks.length -1].id + 1), title: title, description: description, status: 'OPEN'})
    }else{
      this.tasks = [];
      this.tasks.push({id: '1', title: title, description: description, status: 'OPEN'});
    }
  }
}
