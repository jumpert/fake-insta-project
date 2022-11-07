import { catchError, Observable, of, tap } from 'rxjs';

import { User } from '../models/user';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  private userUrl = 'http://localhost:3000/api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  // GET user from mock DB
  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  // GET users from mock DB
  getUsers(): Observable<User[]> {
    /*let users = new Array<User>();
    this.http.get<User[]>(this.userUrl).subscribe((data) => {
      users = data;
    });
    return of(users);*/
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // TODO: implement better logging mechanism
  private log(message: string) {
    console.log(`UserService: ${message}`);
  }
}
