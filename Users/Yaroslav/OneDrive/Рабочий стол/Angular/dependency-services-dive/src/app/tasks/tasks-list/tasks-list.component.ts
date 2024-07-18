import { TasksService } from './../tasks.service';
import { Component, inject, signal } from '@angular/core';
// import { TasksService } from '../tasks.service';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  tasks = inject(TasksService).tasks;
  

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
