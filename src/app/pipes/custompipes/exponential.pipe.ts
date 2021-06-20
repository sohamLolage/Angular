import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number, exp:number): number {
    let v = exp;
    return Math.pow(value, isNaN(v)? 1 : v);
  }

}
