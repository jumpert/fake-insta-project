import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, Observable, of, tap } from 'rxjs';

import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  private imageUrl = 'api/images';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  // GET image from mock DB
  getImage(id: number): Observable<Image> {
    const url = `${this.imageUrl}/${id}`;
    return this.http.get<Image>(url).pipe(

      tap((_) => console.log(`fetched image with image=${id}`)),
      catchError(this.handleError<Image>(`getImage image=${id}`))
    );
  }

  // GET images from mock DB
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this.imageUrl).pipe(
      tap(_ => this.log('fetched images')),
      catchError(this.handleError<Image[]>('getImages', []))
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
    console.log(`ImageService: ${message}`);
  }
}