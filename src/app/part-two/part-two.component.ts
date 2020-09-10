import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';



@Component({
  selector: 'app-part-two',
  templateUrl: './part-two.component.html',
  styleUrls: ['./part-two.component.css']
})
export class PartTwoComponent implements OnInit {

  constructor(private appService: AppService,private http : HttpClient) { }

  public responseType;

  ngOnInit(): void {
      this.http.get('assets/hellotext.txt', {responseType: 'text'}).subscribe(data => {
          console.log(data,"RESPONSE TYPE : TEXT");
          this.responseType = data;
      });

      this.appService.getAllPosts().subscribe(data => {
        console.log(data,"Descriptionms "+data[0].ItemDescription);
      },(error) => {
          console.log("error occured nino", error)
      })
  }

}
