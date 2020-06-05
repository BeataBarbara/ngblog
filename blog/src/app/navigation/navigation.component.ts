import { Component, OnInit } from '@angular/core';
const PostsComponent = new Request ('./posts/posts.component');

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'Angular blog';

  constructor() { }

  ngOnInit(): void {
  }

}
