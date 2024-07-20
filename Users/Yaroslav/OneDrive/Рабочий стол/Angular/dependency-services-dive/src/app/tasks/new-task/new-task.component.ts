import { TasksServiceToken } from './../../../main';
import { Component, ElementRef, Inject, inject, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  constructor(@Inject(TasksServiceToken) private TasksService: TasksService){

  }
  title = signal('');
  descriptiton = signal('');
  onAddTask(title: string, description: string) {
    this.TasksService.addTask(title, description);
    console.log(this.TasksService)
    this.formEl()?.nativeElement.reset();
  }
}
