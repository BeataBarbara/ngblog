import { Component, OnInit } from '@angular/core';
import { MyPost } from '../myPost';
import { CreatePostService } from '../create-post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  myPost: MyPost = {
    title: '...',
    text: '...'
  };
  constructor(public createpostservice: CreatePostService, public activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const myPostId = this.activatedRoute.snapshot.params.id;

    this.createpostservice.fetchPost(myPostId)
    .then((myPost: MyPost) => {
      console.log(myPost);
      this.myPost = myPost;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
