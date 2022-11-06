import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'chats', component: ChatListComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'post', component: PostComponent },
  { path: 'users', component: UserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'search', component: SearchViewComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
