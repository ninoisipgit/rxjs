import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'car',
  // this will reload the object(data)whenever changes
  // pure: false
})
export class CarPipe implements PipeTransform {

  transform(value: any[], color?: string, name?:string): any[] {
    console.log(color,"coming from pipe");
    if(color){
      value =  value.filter(car => car.color === color);
    }

    if(name){
      value = value.filter(car => car.name.includes(name.toLowerCase()));
    }
    return value;
  }

}
