import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() amountChange = new EventEmitter<number>();


  // @Input() amount = 40;

  private _amount: number;
  @Input()
  get amount(){
    return this._amount;
  }

  set amount(value:number){
    value += 50;
    this._amount = value;
// output
    this.amountChange.emit(this._amount);
  }




  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  changeAmount(){
    this.amount += 100;
  }

  addStudent(){
      this.appService.addStudent('david');
  }

}
