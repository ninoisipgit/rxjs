import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { AppComponent } from './app.component';
import { PartFourComponent } from './part-four/part-four.component';


const routes: Routes = [
  { path: '', component: PartFourComponent,
    children: [
      { path: 'part-one', component: PartOneComponent },
      { path: 'part-two', component: PartTwoComponent },
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
