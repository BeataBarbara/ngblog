import { Component, OnInit } from '@angular/core';
const PostsComponent = new Request ('./posts/posts.component');

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  title = 'Angular blog';

  constructor() { }

  ngOnInit(): void {
  }

}
