import { CreatePostService } from './../create-post.service';
import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  myPosts;

  // tslint:disable-next-line: no-inferrable-types
  query: string = '';

  constructor(public createPostService: CreatePostService) { }

  ngOnInit() {
    console.log('myPosts')
    this.updatePosts();
  }

  onDelete(myPostId) {
    this.createPostService.deletePost(myPostId)
    .then(() => {
      this.updatePosts();
    });
  }

  search(query) {
    this.query = query;
  }

  updatePosts() {
   this.myPosts = this.createPostService.fetchPosts(this.query);
   console.log('myPostsxx')
  }
}


