import { CreatePostService } from './../create-post.service';
import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  myPosts;

 query: string = '';

  constructor(public createPostService: CreatePostService) {   }

  ngOnInit() {
    this.updatePosts();
  }

  updatePosts() {
   this.myPosts = this.createPostService.fetchPosts(this.query);
  }
}
