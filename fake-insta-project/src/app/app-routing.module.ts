import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostScrollComponent } from './post-scroll/post-scroll.component';
import { PostComponent } from './post/post.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: PostScrollComponent },
  { path: 'chats', component: ChatListComponent },
  { path: 'chats/:id', component: ChatComponent },
  { path: 'post', component: PostComponent },
  { path: 'users', component: UserComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'search', component: SearchViewComponent},
  { path: 'home', component: PostScrollComponent },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
