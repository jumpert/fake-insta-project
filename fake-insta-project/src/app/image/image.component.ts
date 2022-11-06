import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

import { Image } from '../models/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})

export class ImageComponent implements OnInit {

  @Input() imageId!: number;

  selectedImage!: Image;

  constructor(private imageService: ImageService,) { }

  ngOnInit(): void {
    this.getImage();
  }

  getImage(): void {
    this.imageService.getImage(this.imageId)
      .subscribe(image => this.selectedImage = image);
  }
}
