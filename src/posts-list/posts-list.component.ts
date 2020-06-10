import { MyPost } from './../myPost';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {
    @Input() myPost: MyPost;
    @Output() delete = new EventEmitter();

    onClick() {
        this.delete.emit(this.myPost.id);
    }
}
