import { Component, computed, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthDirective } from './auth/auth.directive';
import { NgIf } from '@angular/common';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective, NgIf],
})
export class AppComponent {
  private authService = inject(AuthService)

  isAdmin = computed(()=> this.authService.activePermission()=== 'admin');


}
