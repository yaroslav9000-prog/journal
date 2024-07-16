import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RectComponent } from './rect/rect.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rectangle';
  @Input() width: string = '100';
  @Input() height: string = '100';
  @Output() widthChange = new EventEmitter();
  @Output() heightChange = new EventEmitter();
  rectangleSize = {
    width: this.width,
    height: this.height
  }
  onHeightChange(){
    this.heightChange.emit(this.height);
  }
  onWidthChange(){
    this.widthChange.emit(this.width);
  }
}
