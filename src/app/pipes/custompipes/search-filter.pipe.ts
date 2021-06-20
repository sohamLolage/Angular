import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: any[], searchText:string): any[] {
    console.log("in filter"+items);
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
     console.log("in search")
      return it.name.toLowerCase().includes(searchText);
    });
  }

}
