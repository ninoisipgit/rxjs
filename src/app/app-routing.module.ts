import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartTwoComponent } from './part-two/part-two.component';
import { PartOneComponent } from './part-one/part-one.component';
import { PartThreeComponent } from './part-three/part-three.component';
import { GarageResolverService } from './garage-resolver.service';
import { PartFourComponent } from './part-four/part-four.component';
import { PartFiveComponent } from './part-five/part-five.component';
import { PartSixComponent } from './part-six/part-six.component';
import { PartEightComponent } from './part-eight/part-eight.component';
import { PartSevenComponent } from './part-seven/part-seven.component';


const routes: Routes = [

  // part of lazy loading
  // { path: 'part-one', component: PartOneComponent },
  // { path: 'part-two', component: PartTwoComponent },

  // { path: 'lazy',loadChildren: './lazy-loading.module#LazyLoadingModule' },
  { path: 'lazy-loading',loadChildren: () => import('./lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: 'part-three', component: PartThreeComponent, resolve : {cars: GarageResolverService}},
  { path: 'part-four', component: PartFourComponent},
  { path: 'part-five', component: PartFiveComponent},
  { path: 'part-six', component: PartSixComponent},
  { path: 'part-seven', component: PartSevenComponent},
  { path: 'part-eight', component: PartEightComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
