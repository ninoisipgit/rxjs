import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from './app.service';


@Injectable({
  providedIn: 'root'
})

export class GarageResolverService implements Resolve<any[]> {

  constructor(private appService: AppService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<any[]> | Promise<any[]> | any[]{
    return this.appService.getAllPosts();

    // THIS IS THE FIRST WAY WITHOUT USING SERVICE
    // const cars : any[] = [
    //   {
    //     name: 'fusion',
    //     color: 'blue'
    //   }
    // ];

    // const observable:Observable<any[]> = Observable.create(observer => {
    //         observer.next(cars);
    //         observer.complete();
    //     }
    //   );

    //   const promise:Promise<any[]> = new Promise((resolve, reject) => {
    //       resolve(cars);
    //   })
    // return cars;


  }
}
