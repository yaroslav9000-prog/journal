import { TasksService } from './../tasks.service';
import { Component, inject, signal } from '@angular/core';
// import { TasksService } from '../tasks.service';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksServiceToken } from '../../../main';
import { TASK_STATUS_OPTIONS, taskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers: [taskStatusOptionsProvider]
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);
  tasks = inject(TasksServiceToken).tasks;
  

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
