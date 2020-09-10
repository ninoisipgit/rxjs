import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-part-five',
  templateUrl: './part-five.component.html',
  styleUrls: ['./part-five.component.css']
})
export class PartFiveComponent implements OnInit {
  public form = this.fb.group({
    owner: ['',Validators.required],
    carOne: ['ford',Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  public disableAll():void {
    Object.keys(this.form.controls).forEach(key => {

      const control = this.form.get(key);
      control.disable();
    })
  }

  public save(form: FormGroup):void {
    console.log(form);
    Object.keys(form.controls).forEach(key => {
      const control = form.get(key);
      control.markAsDirty();
    })
  }

  ngOnInit(): void {
  }

}
