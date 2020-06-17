import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyPost } from '../myPost';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent{
  @Input() myPost: MyPost;
  @Output() delete = new EventEmitter();

  title = 'Usuwanie postu';

  onClick() {
    this.delete.emit(this.myPost.id);
  }

  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: `Czy chcesz usunąć ten post?`
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Yes clicked');
        this.delete.emit(this.myPost.id);
      }
    });
  }
}
