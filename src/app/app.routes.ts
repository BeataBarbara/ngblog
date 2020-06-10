import { Route } from '@angular/router';
import { CreatePostComponent } from '../create-post/create-post.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
// import { PostDetailComponent } from '../post-detail/post-detail.component';
import { OopsComponent } from '../oops/oops.component';
import { HomeComponent } from '../home/home.component';

export const appRoutes: Route[] = [
    { path: '', component: HomeComponent },
    { path: 'create', component: CreatePostComponent },
    { path: 'list', component: PostsListComponent },
    // { path: 'list/:id', component: PostDetailComponent },
    { path: '**', component: OopsComponent }
];
