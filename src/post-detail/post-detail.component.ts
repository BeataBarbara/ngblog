import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatePostService } from 'src/create-post.service';
import { MyPost } from '../myPost';
import { trigger, transition, style, animate, query, stagger, animateChild, state } from '@angular/animations';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.1)', opacity: 0 }),
        animate('1s 0.1s ease-out',
          style({ transform: 'scale(1)', opacity: 1 }))     ]),
    ]),
    // trigger('tag', [
    //     transition(':enter', [
    //       style({ transform: 'scale(0.1)', opacity: 0 }),
    //       animate('1s 0.1s ease',
    //         style({ transform: 'scale(1)', opacity: 1 }))
    //     ]),
    // ]),
    trigger('tag', [
      state('initial', style({
        backgroundColor: 'green',
        transform: 'scale(1)'
      })),
      state('final', style({
        backgroundColor: 'red',
        transform: 'scale(1.5)'
      })),
      transition('final=>initial', animate('1000ms')),
      transition('initial=>final', animate('1500ms'))
    ]),
  ]
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
