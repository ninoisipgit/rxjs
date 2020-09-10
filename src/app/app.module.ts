import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartOneComponent } from './part-one/part-one.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartTwoComponent } from './part-two/part-two.component';
import { PartThreeComponent } from './part-three/part-three.component';
import { PartFourComponent } from './part-four/part-four.component';
import { PartFiveComponent } from './part-five/part-five.component';
import { CarComponent } from './part-five/car/car.component';
import { PartSixComponent } from './part-six/part-six.component';
import { CarPipe } from './car.pipe';
import { PartEightComponent } from './part-eight/part-eight.component';
import { PartSevenComponent } from './part-seven/part-seven.component';
import { ChildComponent } from './part-seven/child/child.component';
import { SearchPipe } from './search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    // PartOneComponent,
    // PartTwoComponent,
    PartThreeComponent,
    PartFourComponent,
    PartFiveComponent,
    CarComponent,
    PartSixComponent,
    CarPipe,
    PartEightComponent,
    PartSevenComponent,
    ChildComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
