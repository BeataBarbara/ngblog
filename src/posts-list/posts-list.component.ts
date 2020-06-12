import { Component, OnInit } from '@angular/core';
import { CreatePostService } from '../create-post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  myPosts;
  query: string = '';
  isHidden: boolean = true;

  constructor(public createPostService: CreatePostService) { }

  ngOnInit() {
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
    this.myPosts = this.createPostService.fetchPosts(this.query);
  }
  updatePosts() {
   this.myPosts = this.createPostService.fetchPosts(this.query);
  }
}
