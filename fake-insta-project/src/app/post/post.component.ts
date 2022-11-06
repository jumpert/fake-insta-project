import { Component, Input, OnInit } from '@angular/core';

import { User } from '../models/user';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  @Input() user!: User;

  currentImage = this.user.profileImages[0];
  currentUser = this.user;

  constructor() {}

  ngOnInit(): void {
  }
}
