
import { Route } from '@angular/router';
import { CreatePostComponent } from '../create-post/create-post.component';
import { PostsListComponent } from '../posts-list/posts-list.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { OopsComponent } from '../oops/oops.component';
import { PostsComponent } from '../posts/posts.component';



export const appRoutes: Route[] = [
    { path: '', component: PostsComponent },
    { path: 'create', component: CreatePostComponent },
    { path: 'list', component: PostsListComponent },
    { path: 'list/:id', component: PostDetailComponent },
    { path: '**', component: OopsComponent }
];
