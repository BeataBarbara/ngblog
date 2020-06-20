import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CreatePostService } from '../create-post.service';
import { Tags } from 'src/myPost';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {


  constructor(public formBuilder: FormBuilder, public createPostService: CreatePostService) { }

  myPosts;
  query: string = '';
  createPost: FormGroup;
  isHiddenBaseView: boolean = true;
  isHiddenSortDate: boolean = false;
  isHiddenSortTitle: boolean = false;
  isHiddenSortTextLen: boolean = false;

  ngOnInit() {
    this.updatePosts();
    this.createPost = this.formBuilder.group({
      tags: this.formBuilder.group({
        [Tags.Hair]: false,
        [Tags.Fry]: false,
        [Tags.Soap]: false,
        [Tags.Recomend]: false,
        [Tags.Face]: false,
      }),
    });
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
