import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyPost } from './myPost';


@Injectable()
export class CreatePostService {
  // tslint:disable-next-line: no-inferrable-types
  url: string = 'http://localhost:3000/posts';
  constructor(public http: HttpClient) { }

  createPost(mypost: MyPost) {
    return this.http.post(this.url, mypost).toPromise();
  }

  fetchPosts(query: string) {
    return this.http.get(`${this.url}/${query}`).toPromise();
  }

  fetchPost(postId) {
    return this.http.get(`${this.url}/${postId}`).toPromise();
  }
  deletePost(postId) {
    return this.http.delete(`${this.url}/${postId}`).toPromise();
  }
}
