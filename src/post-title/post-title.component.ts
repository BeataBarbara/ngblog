import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatePostService } from 'src/create-post.service';
import { MyPost } from '../myPost';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css']
})
export class PostTitleComponent implements OnInit {
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
