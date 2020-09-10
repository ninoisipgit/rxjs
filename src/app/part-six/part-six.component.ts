import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-part-six',
  templateUrl: './part-six.component.html',
  styleUrls: ['./part-six.component.css']
})
export class PartSixComponent implements OnInit {
  person = 'Nino';
  today = new Date();
  color:string;
  colors = ['blue','red','green'];
  name:string;
  cars = [
    {
      color: 'red',
      name: 'ford'
    },
    {
      color: 'blue',
      name: 'ferrari'
    },    {
      color: 'blue',
      name: '1ferrari'
    },
    {
      color: 'brown',
      name: 'porsche'
    }
  ]


  constructor() { }

  ngOnInit(): void {
    console.log(new UpperCasePipe().transform(this.person),"from pipe manual");
  }

  addCar(){
    const newCar = {
      name: 'fusion',
      color:'blue'
    };
    // first way  add even filtered
    // this.cars.push(newCar);
    const newArray = [newCar].concat(this.cars);
    this.cars = newArray;
    console.log(this.cars);
  }

}
