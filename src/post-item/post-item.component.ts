import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyPost } from '../myPost';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent {
  @Input() myPost: MyPost;
  @Output() delete = new EventEmitter();

  onClick() {
    this.delete.emit(this.myPost.id);
  }

}
