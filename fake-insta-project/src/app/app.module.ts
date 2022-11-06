import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottomNavbarComponent } from './bottom-navbar/bottom-navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ChatComponent } from './chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ImageComponent } from './image/image.component';
import { InstaButtonComponent } from './insta-button/insta-button.component';
import { NavbarDiscoverButtonComponent } from './navbar-discover-button/navbar-discover-button.component';
import { NavbarProfileButtonComponent } from './navbar-profile-button/navbar-profile-button.component';
import { NavbarSearchButtonComponent } from './navbar-search-button/navbar-search-button.component';
import { PostComponent } from './post/post.component';
import { PostScrollComponent } from './post-scroll/post-scroll.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavbarComponent,
    ChatComponent,
    ChatListComponent,
    ImageComponent,
    InstaButtonComponent,
    NavbarDiscoverButtonComponent,
    NavbarProfileButtonComponent,
    NavbarSearchButtonComponent,
    PostComponent,
    PostScrollComponent,
    SearchBarComponent,
    SearchViewComponent,
    TopNavbarComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
