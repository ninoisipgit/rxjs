import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-part-seven',
  templateUrl: './part-seven.component.html',
  styleUrls: ['./part-seven.component.css']
})
export class PartSevenComponent implements OnInit {

  // @ViewChild('localvariable') child ;
  @ViewChild(ChildComponent) child : ChildComponent;

  @ViewChildren(ChildComponent) children : QueryList<ChildComponent>;


  constructor(private appService: AppService) { }

  ngOnInit(): void {

    this.appService.students.subscribe(value => {
      console.log("SUBJECT= new value",value);
    })
  }

  parentChange(){
    this.child.changeAmount();
  }

  onAmountChange(event:number){

    console.log('New number:',event);
  }

}
