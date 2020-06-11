import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePostService } from '../create-post.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  myPosts;
  query: string = '';
  createPost: FormGroup;
  postIsReady: boolean = false;
  showErrors: boolean = false;

  constructor(public formBuilder: FormBuilder, public createpostservice: CreatePostService) { }

  ngOnInit() {
    this.updatePosts();
    this.createPost = this.formBuilder.group({
      title: ['', Validators.minLength(5) ],
      text: ['', Validators.minLength(100) ]
    });
  }

  save() {
    if (this.createPost.valid) {
        const formValue = this.createPost.getRawValue();
        this.createpostservice.createPost(formValue)
        .then(success => console.info(success))
        .catch(failure => console.error(failure));
        this.postIsReady = true;
    } else {
        this.showErrors = true;
        console.log('Nie można zapisać postu. Sprawdź komunikaty o błędach.');
    }
}
updatePosts() {
  this.myPosts = this.createpostservice.fetchPosts(this.query);
 }
}
