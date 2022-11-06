import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable, of } from 'rxjs';

import { Chat } from '../models/chat';
import { User } from '../models/user'; 
import { Image } from '../models/image'; 


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const users: User[] = [    
      {id: 1, firstName: 'Valiant', lastName: 'Toro', username: '@torito10', profilePic: 9, profileImages: [1, 2]},
      {id: 2, firstName: 'Ginebra', lastName: 'Barrios', username: '@ginebra', profilePic: 13, profileImages: [3, 4]},
      {id: 3, firstName: 'Dulas', lastName: 'Sarabia', username: '@dsarabia', profilePic: 10, profileImages: [5, 6]},
      {id: 4, firstName: 'Reynaldo', lastName: 'Rincón', username: '@reyrincon', profilePic: 12, profileImages: [7, 8]}
    ];

    const images: Image[] = [
      { id: 1, imageSrc: '../../assets/posts/alan-king-KZv7w34tluA-unsplash.jpg'},
      { id: 2, imageSrc: '../../assets/posts/alvan-nee-9M0tSjb-cpA-unsplash.jpg'},
      { id: 3, imageSrc: '../../assets/posts/brian-mcgowan-P1-6ioOcGNU-unsplash (1).jpg'},
      { id: 4, imageSrc: '../../assets/posts/jaime-dantas-Fpvr7thkAf0-unsplash.jpg'},
      { id: 5, imageSrc: '../../assets/posts/ian-dooley-TLD6iCOlyb0-unsplash.jpg'},
      { id: 6, imageSrc: '../../assets/posts/kelsey-curtis-dIs-MqalSSE-unsplash.jpg'},
      { id: 7, imageSrc: '../../assets/posts/keszthelyi-timi-ezUDjYy17EA-unsplash.jpg'},
      { id: 8, imageSrc: '../../assets/posts/lokesh-paduchuri-xOBGLCETJCo-unsplash.jpg'},
      { id: 9, imageSrc: '../../assets/profile-pics/cesar-rincon-XHVpWcr5grQ-unsplash.jpg'},
      { id: 10, imageSrc: '../../assets/profile-pics/michael-dam-mEZ3PoFGs_k-unsplash.jpg'},
      { id: 11, imageSrc: '../../assets/profile-pics/oguz-yagiz-kara-MZf0mI14RI0-unsplash.jpg'},
      { id: 12, imageSrc: '../../assets/profile-pics/podpros-UpiF461EAHU-unsplash.jpg'},
      { id: 13, imageSrc: '../../assets/profile-pics/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg'}
    ];
    
    
    const chats: Chat[] = [
      {id: 1, username: '@torito10', message: 'Este es el primer mensaje de torito.', chatId: 'abc1234'},
      {id: 2, username: '@ginebra', message: 'Es el mensaje ginebra.', chatId: 'abc1234'},
      {id: 2, username: '@ginebra', message: 'feserw rwe we .', chatId: 'abc1234'},
      {id: 1, username: '@torito10', message: 'Este segundo.', chatId: 'abc1234'},
      {id: 2, username: '@ginebra', message: 'Es el mensaje ginebra.2', chatId: 'abc1234'},
      {id: 1, username: '@torito10', message: 'torito a dulas', chatId: 'zyx987'},
      {id: 3, username: '@dsarabia', message: 'Es el mensaje dulas.1', chatId: 'zyx987'},
      {id: 1, username: '@torito10', message: 'torito a dulas 2.', chatId: 'zyx987'},
      {id: 3, username: '@dsarabia', message: 'Es el mensaje dulas.2', chatId: 'zyx987'},
      {id: 1, username: '@torito10', message: 'torito a dulas 3.', chatId: 'zyx987'},
      {id: 3, username: '@dsarabia', message: 'Es el mensaje dulas.3', chatId: 'zyx987'},
    ];

    const postImages: Image[] = [
      {
        id: 1,
        imageSrc: '../../assets/posts/alan-king-KZv7w34tluA-unsplash.jpg',
        description: 'dog'
      },
      {
        id: 2,
        imageSrc: '../../assets/posts/alvan-nee-9M0tSjb-cpA-unsplash.jpg',
        description: 'dog'
      },
      {
        id: 3,
        imageSrc: '../../assets/posts/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg',
        description: 'dog'
      },
      {
        id: 4,
        imageSrc: '../../assets/posts/hannah-lim-U6nlG0Y5sfs-unsplash.jpg',
        description: 'dog'
      },
      {
        id: 5,
        imageSrc: '../../assets/posts/jamie-street-uNNCs5kL70Q-unsplash.jpg',
        description: 'capybara'
      },
      {
        id: 6,
        imageSrc: '../../assets/posts/joshua-j-cotten-g1XMkqwN4po-unsplash.jpg',
        description: 'capybara'
      },
      {
        id: 7,
        imageSrc: '../../assets/posts/klaus-steinberg-hcjG82lNTwg-unsplash.jpg',
        description: 'capybara'
      },
      {
        id: 8,
        imageSrc: '../../assets/posts/karen-lau-2EmW_HIy6Ns-unsplash.jpg',
        description: 'capybara'
      },
      {
        id: 9,
        imageSrc: '../../assets/posts/svitlana-kg7gcQtp4N8-unsplash.jpg',
        description: 'dessert'
      },
      {
        id: 10,
        imageSrc: '../../assets/posts/rachael-gorjestani-HLt6jQLf_J0-unsplash.jpg',
        description: 'dessert'
      },
      {
        id: 11,
        imageSrc: '../../assets/posts/kelsey-curtis-dIs-MqalSSE-unsplash.jpg', 
        description: 'dessert'
      },
      {
        id: 12,
        imageSrc: '../../assets/posts/kenta-kikuchi-LZ6BTZnizD8-unsplash.jpg',
        description: 'dessert'
      }
    ];

    const imagesByCategory = {
      dog: [1,2,3,4],
      capybara: [5,6,7,8],
      dessert: [9,10,11,12]
    }




    return { users, chats, postImages, images, imagesByCategory,};
  }
}