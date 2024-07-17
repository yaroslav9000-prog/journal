import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {
  // Pipe is a class like all the other components.
  transform(value: string | number | null,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ){
    if(!value){
      return value;
    }
    // value on which this transform function is used
    // args configuration arguments for transforming such value.
    let val: number;
    if(typeof value === 'string'){
      val = parseFloat(value)
    }else{
      val = value;
    }
    let outputTemp: number = 0;

    if(inputType === 'cel' && outputType === 'fah'){
    outputTemp = 9/5 * val + 32;}else if(inputType === 'fah' && outputType==='cel'){
      outputTemp = 5/9*(val - 32);
    }else{
      outputTemp = val;
    }
    let symbol :'°C' | '°F';

    if(!outputType){
      symbol = inputType==='cel' ? '°C' : '°F'; 
    }else{
      symbol = outputType == 'cel'? '°C' : '°F' 
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }

}
