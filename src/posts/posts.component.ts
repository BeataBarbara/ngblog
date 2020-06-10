import { CreatePostService } from './../create-post.service';
import { Component,  OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  myPosts;
  // tslint:disable-next-line: no-inferrable-types
  query: string = '';

  constructor(public createPostService: CreatePostService ) {
  }

  ngOnInit()  {
this.updateList();
  }
  onDelete(myPostId) {
  this.createPostService.deletePost(myPostId)
      .then(() => {
          this.updateList();
      });
}
  updateList() {
    this.myPosts = this.createPostService.fetchPosts(this.query);
  }

}


