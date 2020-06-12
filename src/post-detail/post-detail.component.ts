import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatePostService } from 'src/create-post.service';
import { MyPost, Tags } from '../myPost';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() myPost: MyPost;
  @Output() delete = new EventEmitter();

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
