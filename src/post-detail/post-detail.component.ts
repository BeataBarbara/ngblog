import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatePostService } from 'src/create-post.service';
import { MyPost } from '../myPost';
import { trigger, transition, style, animate, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.1)', opacity: 0 }),
        animate('0.7s cubic-bezier(.8, -0.6, 0.26, 1.6)',
          style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('0.6s cubic-bezier(.8, -0.6, 0.2, 1.5)',
          style({
            transform: 'scale(0.5)', opacity: 0,
            height: '0px', margin: '0px'
          }))
      ])
    ]),
    trigger('tag', [
        transition(':enter', [
          style({ transform: 'scale(0.1)', opacity: 0 }),
          animate('1s 0.1s ease',
            style({ transform: 'scale(1)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'scale(1)', opacity: 1, height: '*' }),
          animate('0.6s cubic-bezier(.8, -0.6, 0.2, 1.5)',
            style({
              transform: 'scale(0.5)', opacity: 0,
              height: '0px', margin: '0px'
            }))
        ])
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
