import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyPost } from './myPost';


@Injectable()
export class CreatePostService {
  // tslint:disable-next-line: no-inferrable-types
  url: string = 'http://localhost:3000/sandwiches';
  constructor(public http: HttpClient) {}

  createPost(mypost: MyPost) {
      return this.http.post(this.url, mypost).toPromise();
  }
}
