import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePostService } from '../create-post.service';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPost: FormGroup;

  // tslint:disable-next-line: no-inferrable-types
  showErrors: boolean = false;

  constructor(public formBuilder: FormBuilder, public createpostservice: CreatePostService) { }

  ngOnInit() {
    this.createPost = this.formBuilder.group({
      title: ['', Validators.minLength(5) ],
      text: ['', Validators.minLength(100) ]
    });
  }

  save() {
    if (this.createPost.valid) {
        const formValue = this.createPost.getRawValue();
        // zapisujemy post do serwera
        this.createpostservice.createPost(formValue)
        // tslint:disable-next-line: no-console
        .then(success => console.info(success))
        .catch(failure => console.error(failure));
    } else {
        this.showErrors = true;
        console.log('Nie można zapisać postu. Sprawdź komunikaty o błędach.');
    }
}
}
