import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-eight',
  templateUrl: './part-eight.component.html',
  styleUrls: ['./part-eight.component.css']
})
export class PartEightComponent implements OnInit {

  value:string = '';
  constructor() { }
  people = [
    {name: 'david'},
    {name: 'nino'},
    {name: 'carlo'},
    {name: 'goliath'},
    {name: 'coco'},
    {name: 'kim'},
    {name: 'nicole'}
  ]

  ngOnInit(): void {
  }

  setList(group){

    this.clearList();
    for ( const person of group){

    }

  }

  clearList(){

  }

  setNoResults(){

  }

}
