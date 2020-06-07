import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CreatePostComponent } from './create-post/create-post.component';
import { NavigationComponent } from './navigation/navigation.component';
import { OopsComponent } from './oops/oops.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsComponent } from './posts/posts.component';
import { AsideComponent } from './aside/aside.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostsComponent,
    CreatePostComponent,
    OopsComponent,
    PostsListComponent,
    PostDetailComponent,
    AsideComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
