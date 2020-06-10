import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatePostService } from 'src/create-post.service';
import { MyPost } from '../myPost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  myPost: MyPost = {
    title: 'brak',
    text: 'brak'
  };

  constructor(public createPostService: CreatePostService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const myPostId = this.activatedRoute.snapshot.params.id;

    this.createPostService.fetchPost(myPostId)
    .then((myPost: MyPost) => {
      console.log(myPost);
      this.myPost = myPost;
    })
    .catch(error => {
      console.log(error);
    });
  }

}