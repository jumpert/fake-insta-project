import { ImageService } from './image.service';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

import { catchError, map, Observable, of, tap } from 'rxjs';

import { Image } from '../models/image';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private url = 'api/imagesByCategory';
  private url2 = 'http://localhost:3000/api/images';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private imageService: ImageService) {}

  // ESTO ES UNA CHANCHADA !!!
  searchImages(term: string) {
    var imagesByCategory = this.http.get<{}>(this.url);

    return imagesByCategory.subscribe((data) => {
      if (term in data) {
        var ids = Object.fromEntries(
          Object.entries(data).filter(([key]) => key === term)
        );
      

        var idsArray = Object.values(ids)[0] as number[];

        idsArray.forEach((id) => {
          this.imageService.getImage(id).subscribe((image) => {
            console.log('image', image);
          });
        });
      }
    });
  }

  searchImages2(term: string): Observable<Image[]> {
    let results = new Array<Image>();

    this.http.get<Image[]>(this.url2).subscribe((data) => {
      data.forEach((image) => {
        if (image.description === term) {
          results.push(image);
        }
      });
    });

    return of(results);
  }
  
}