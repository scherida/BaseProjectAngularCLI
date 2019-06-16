import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monetary'
})
export class MonetaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = (value/100).toFixed(2);
    return value;
  }

}
