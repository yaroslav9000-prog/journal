import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
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
  tasksService = inject(TasksService);
  title = signal('');
  descriptiton = signal('');
  onAddTask(title: string, description: string) {
    this.tasksService.addTask(title, description);
    console.log(this.tasksService)
    this.formEl()?.nativeElement.reset();
  }
}
