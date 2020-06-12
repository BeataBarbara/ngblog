import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatePostService } from '../create-post.service';
import { Tags } from '../myPost';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  myPosts;
  query: string = '';
  createPost: FormGroup;
  showErrors: boolean = false;
  postIsReady: boolean = false;
  date: Date = new Date();

  constructor(public formBuilder: FormBuilder, public createpostservice: CreatePostService) { }

  ngOnInit() {
    this.updatePosts();
    this.createPost = this.formBuilder.group({
      tags: this.formBuilder.group({
        [Tags.Hair]: false,
        [Tags.Fry]: false,
        [Tags.Soap]: false,
        [Tags.Recomend]: false,
        [Tags.Face]: false,
      }),
      title: ['', Validators.minLength(5)],
      text: ['', Validators.minLength(100)],
      date: this.date
    });
  }

getTags(tags: Tags[]): Tags[] {
  const myTags = [];
  for (let key in tags) {
  if (tags[key]) {
    myTags.push(key);
  }
}
  return myTags;
}
  save() {
    if (this.createPost.valid) {
      const formValue = this.createPost.getRawValue();
      // formValue.ingredients = this.getSelectedIngredients(formValue.ingredients);
      formValue.tags = this.getTags(formValue.tags);
      this.createpostservice.createPost(formValue)
        .then(success => console.info(success))
        .catch(failure => console.error(failure));
      this.postIsReady = true;
      this.updatePosts();
    } else {
      this.showErrors = true;
      console.log('Nie można zapisać postu. Sprawdź komunikaty o błędach.');
    }
  }
  updatePosts() {
    this.myPosts = this.createpostservice.fetchPosts(this.query);
  }
}
