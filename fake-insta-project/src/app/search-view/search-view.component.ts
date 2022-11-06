import { Component, OnInit } from '@angular/core';
import { Image } from '../models/image';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  results : Image[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  showResults(res: Image[]) {
    this.results = res;
  }

}