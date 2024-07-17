import { Component } from '@angular/core';
import{DatePipe, DecimalPipe} from '@angular/common';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, DecimalPipe, TemperaturePipe, SortPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];

  onReset(index: number) {
    const newTemps = [...this.historicTemperatures];
    newTemps[index] = 18;
    this.historicTemperatures = newTemps;
    
  }
}
