import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatePostService } from 'src/create-post.service';
import { MyPost } from '../myPost';
import { trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-post-title',
  templateUrl: './post-title.component.html',
  styleUrls: ['./post-title.component.css'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.1)', opacity: 0 }),
        animate('1s cubic-bezier(.8, -0.6, 0.26, 1.6)',
          style({ transform: 'scale(1)', opacity: 1 }))     ]),
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
export class PostTitleComponent implements OnInit {
  @Input() myPost: MyPost;
  @Output() delete = new EventEmitter();
  config: any;
  myPosts;
  // colltection = this.myPosts.title;

  constructor(public createPostService: CreatePostService, public activatedRoute: ActivatedRoute, public router: Router) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 5,
      totalItems: 0
  };
    activatedRoute.queryParams.subscribe(
    params => this.config.currentPage = params.page ? params.page : 1 );
    }

    pageChange(newPage: number) {
        this.router.navigate([''], { queryParams: { page: newPage } });
      }


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
