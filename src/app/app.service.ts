import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

interface Posts {
  Fglength: number;
  Id: number;
  ItemDescription: string;
  ItemNumber: string;
  PiecesPerBundle: number;
  PoundsPerFoot;
  SlitWidth;
  Thickness;
  Width;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  students = new Subject<string>();

  getAllPosts() : Observable<Posts[]>{

    const headers1 = new HttpHeaders({
        'Name': 'NinoISIP'
    });

    let params1 = new HttpParams().append('age','100');

    params1 = params1.append('house','blue');

    return this.http.get<Posts[]>
    ('https://localhost:44358/api/mill/select-mill-fg-masters',{ observe: 'response',headers :headers1 , params:params1 })
    .pipe(
      tap(response => console.log("FROM TAP",response)),
      map(response => response.body),
      retry(3),
      catchError(this.handleError)
    );
  }
// Handle Error
  handleError(error : HttpErrorResponse){
      console.log(error,"ERROR from handle error");
      return throwError(error);
  }

  addStudent(studentName:string){
      this.students.next(studentName);
  }
}
