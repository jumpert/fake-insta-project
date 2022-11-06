import { Component, OnInit } from '@angular/core';
import { ChatComponent } from '../chat/chat.component';
import { Chat } from '../models/chat';
import { Image } from '../models/image';
import { ChatService } from '../services/chat.service';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  chats: Chat[] = [];
  images: Image[] = [];
  constructor(public chatService:  ChatService, public imageService: ImageService) { }

  ngOnInit(): void {
    this.getChat();
    this.getImages();
  }
  getChat(): void {
    this.chatService.getChats()
      .subscribe(chats => this.chats = chats);
  }
  isSender(id: number):boolean {       
    if(id == 1) {
      return true;
    }
     else { 
      return false;
    } 
  }

  getImages(): void {
    this.imageService.getImages()
      .subscribe(images => this.images = images);
  }
  

}
