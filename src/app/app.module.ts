import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CreatePostComponent } from '../create-post/create-post.component';
import { OopsComponent } from '../oops/oops.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { PostsComponent } from '../posts/posts.component';
import { PostItemComponent } from '../post-item/post-item.component';
import { CreatePostService } from 'src/create-post.service';
import { PostTitleComponent } from '../post-title/post-title.component';
import {NgPipesModule} from 'ngx-pipes';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CreatePostComponent,
    OopsComponent,
    PostsListComponent,
    PostDetailComponent,
    PostItemComponent,
    PostTitleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    NgPipesModule
    ],
  providers: [CreatePostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
