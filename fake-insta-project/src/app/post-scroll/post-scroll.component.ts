import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/user';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-scroll',
  templateUrl: './post-scroll.component.html',
  styleUrls: ['./post-scroll.component.css']
})
export class PostScrollComponent implements OnInit {

  users!: User[];
  
  /* users: User[] = [
     {id: 1, firstName: 'Valiant', lastName: 'Toro', username: '@torito10', profilePic: 9, profileImages: [1, 2]},
     {id: 2, firstName: 'Ginebra', lastName: 'Barrios', username: '@ginebra', profilePic: 13, profileImages: [3, 4]},
     {id: 3, firstName: 'Dulas', lastName: 'Sarabia', username: '@dsarabia', profilePic: 10, profileImages: [5, 6]},
     {id: 4, firstName: 'Reynaldo', lastName: 'Rincón', username: '@reyrincon', profilePic: 12, profileImages: [7, 8]}
   ];*/

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    console.log("Cantidad de users " + this.users.length);
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
}
