import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountFilter'
})
export class DiscountFilterPipe implements PipeTransform {

  transform(value:number, discount:number): number {
    let v= value*(discount/100);

    return v;
  }

}
