import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Image } from '../models/image';
import { ImageService } from '../services/image.service';
import { UserService } from './../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  @Input() user!: User;
  imageProfile!: Image;
  users: User[] = [];
  images: Image[] = [];
  //profilePicture?: string;
  //profileImagesSrc?: string[];

  constructor(private userService: UserService, private imageService: ImageService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getImages();
    console.log("users", this.users);
    console.log(this.images);
    //console.log("profilePicture",this.profilePicture);
    console.log(this.users.length);
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }

  getImages(): void {
    this.imageService.getImages()
      .subscribe(images => this.images = images);
  }

  /*getProfilePicture(profilePic: number): void {
    this.profilePicture = this.images.find(x=>x.id == profilePic)?.imageSrc;
  }

  getProfileImages(profileImages: number[]): void {
    //var src: string[];
    //profileImages.forEach(function (value) {
      //src.push(this.images.find(x=>x.id == profilePic)?.imageSrc)
    //});
  }

  getImage(): void {
    this.imageService.getImages()
      .subscribe(images => this.images = images);
  }*/
}