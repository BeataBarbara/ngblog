import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyPost } from './myPost';


@Injectable()
export class CreatePostService {
  // tslint:disable-next-line: no-inferrable-types
  url: string = 'http://localhost:3000/posts';
  constructor(public http: HttpClient) { }

  createPost(myPost: MyPost) {
    // zapisywanie pojedyńczego postu
    return this.http.post(this.url, myPost).toPromise();
  }

  fetchPosts(query: string) {
    // do searcha
    return this.http.get(`${this.url}?q=${query}`).toPromise();
  }

  fetchPost(myPostId) {
// pokazuje pojedyńczy post
    return this.http.get(`${this.url}/${myPostId}`).toPromise();
  }
  deletePost(myPostId) {
    // usauwa pojedyńczy post
    return this.http.delete(`${this.url}/${myPostId}`).toPromise();
  }
}
