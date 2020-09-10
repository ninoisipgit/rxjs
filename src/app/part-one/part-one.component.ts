import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from, fromEvent, Subject, concat, forkJoin } from 'rxjs';
import { map, tap, share, switchMap, take, takeWhile, takeLast, takeUntil, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-part-one',
  templateUrl: './part-one.component.html',
  styleUrls: ['./part-one.component.css']
})
export class PartOneComponent implements OnInit {
  private loading: boolean;

  // DEBOUNCE MAP
  public searchTerm: string;

  // Take Until
  onStop = new Subject<void>();

  constructor(private http: HttpClient) {
      // this.search = this.search.bind(this);
  }

  ngOnInit(): void {

      const person = {
          name:'david'
      };
      // from and of. convert objects
      // const personPromise: Promise<any> = Promise.resolve(person);
      // const personObs: Observable<any> = from(personPromise);
      // personObs.subscribe(data => console.log(data));

// MAP
      const source = of('david');

      source
      .pipe(
          map( name => name.toLocaleUpperCase())
      )
      .subscribe(data =>
          console.log(data,"MAP")
        );
// TAP does not change data in any way
        source
        .pipe(
            tap( name =>  name.toLocaleUpperCase())
        )
        .subscribe(data =>
            console.log(data,"TAP")
          );

    // SHARE
    const request = this.getPosts();
    this.setLoadingSpinner(request);

    request.subscribe(data => {
        console.log(data,"SHARE");
    })

    // SWITCHMAP
    const postObs = this.getPosts();
    const commentsObs = this.getComments();

    const coombined = postObs.pipe(
        switchMap(posts => {
            return commentsObs.pipe(
                tap(comments => {
                    console.log('SWITCHMAP comments : ', comments);
                    console.log('SWITCHMAP posts : ', posts);
                })
            );
        })
    );
    coombined.subscribe();

// Take(1) first = same
        // const src =  fromEvent(document, 'click');
        // src.pipe(take(1))
        // .subscribe(() => console.log('Clicked on document'));

  // TakeWhile
        // let counter = 0;
        // const src =  fromEvent(document, 'click');
        // src.pipe(takeWhile(() => counter < 3))
        // .subscribe(() => {
        //     console.log('Clicked on document!',counter);
        //     counter++;
        // });

  // TakeLast
          // const src =  of(1,2,3,4,5,6);
          // src.pipe(takeLast(3))
          // .subscribe((value) => {
          //     console.log('Clicked on document!',value);
          // });


  // TakeUntil
            const src =  fromEvent(document, 'click');
            src.pipe(takeUntil(this.onStop))
            .subscribe(() => {
                console.log('TAKEUNTIL Clicked on document!');
            });

  // MERGEMAP/ FLATMAP
  const carColorObs: Observable<any> = this.getPosts();
  const carDriverObs: Observable<any> = this.getComments();

  const carObs: Observable<any> = carColorObs.pipe(
      mergeMap(color => {
          return carDriverObs.pipe(
              map(driver => {
                  const car = {
                      driver: driver,
                      color: color
                  };
                  return car;
              })
          );
      })
  );

  carObs.subscribe(data => console.log(data,"MERGE MAP and FLATMAP"));

      // CONCAT
      const combined = concat(carColorObs,carDriverObs);
      combined.subscribe(data => console.log(data,"CONCAT"));

      // FORM JOIN

      const fork = forkJoin(carColorObs,carDriverObs);

      fork.subscribe(data => console.log(data,"FORK JOIN"))




  }
  stop(){
      // TakeUntil
      this.onStop.next();
      this.onStop.complete();

  }

      // DEBOUNCE MAP
  // search(text$:Observable<string>): Observable<string[]>{
  //       return text$.pipe(
  //           switchMap(searchTerm => {
  //               if(!searchTerm){
  //                   return [];
  //               }
  //               return this.getPosts(searchTerm);
  //           })
  //       )
  //   }

  setLoadingSpinner(observable:Observable<any>){
    // SHARE
      this.loading = true;
      observable.subscribe(()=> this.loading = false);
  }
  getPosts(): Observable<any[]>{
    // SHARE | SWITCHMAP
    return this.http.get<any[]>('https://localhost:44358/api/mill/select-mill-fg-masters')
        .pipe(share());
  }

  getComments(): Observable<any[]>{
    //  SWITCHMAP
    return this.http.get<any[]>('https://localhost:44358/api/mill/select-slit-queues')
        .pipe(share());
  }


}

