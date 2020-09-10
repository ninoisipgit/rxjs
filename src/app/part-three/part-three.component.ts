import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-part-three',
  templateUrl: './part-three.component.html',
  styleUrls: ['./part-three.component.css']
})
export class PartThreeComponent implements OnInit {

  public cars: any[];

  constructor(private activatedRoute: ActivatedRoute,private appService: AppService) { }

  ngOnInit(): void {
      this.activatedRoute.data.subscribe(data => {
        this.cars = data.cars;
        console.log(data);
      });
      // this.appService.getCars().subscribe(data => this.cars = data);
  }

}
