import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], name?:string): any[] {

    if(name){
      value =  value.filter(car => car.name.includes(name.toLowerCase()));
      return value;
    }
    return null;
  }

}
