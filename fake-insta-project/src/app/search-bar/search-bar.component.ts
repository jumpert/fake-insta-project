import { SearchService } from './../services/search.service';
import { ImageService } from './../services/image.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Observable, Subject, switchMap } from 'rxjs';
import { Image } from '../models/image';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  search$!: Observable<{}>;
  @Output() event = new EventEmitter<Image[]>();
  //searchResults: Image[] = [];

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {

    this.searchImages2('');
  }

  // Necesito ashuda jose
  searchImages(term: string) {
    this.searchService.searchImages(term);
    
  }

  searchImages2(term: string) {
      this.searchService.searchImages2(term).subscribe((data) => {
      this.event.emit(data);
      //console.log(this.searchResults);
    });
  }

}