import { Component, OnInit } from '@angular/core';
import { CreatePostService } from '../create-post.service';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {


  constructor(public createPostService: CreatePostService) { }

  myPosts;
  query: string = '';
  isHiddenBaseView: boolean = true;
  isHiddenSortDate: boolean = false;
  isHiddenSortTitle: boolean = false;
  isHiddenSortTextLen: boolean = false;

  ngOnInit() {
    this.updatePosts();
  }

  sortDate() {
    this.isHiddenBaseView = false;
    this.isHiddenSortDate = true;
    this.isHiddenSortTitle = false;
    this.isHiddenSortTextLen = false;
  }
  sortName() {
    this.isHiddenBaseView = false;
    this.isHiddenSortDate = false;
    this.isHiddenSortTitle = true;
    this.isHiddenSortTextLen = false;
  }
  sortText() {
    this.isHiddenBaseView = false;
    this.isHiddenSortDate = false;
    this.isHiddenSortTitle = false;
    this.isHiddenSortTextLen = true;
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
