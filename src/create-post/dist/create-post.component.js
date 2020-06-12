"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreatePostComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var myPost_1 = require("../myPost");
var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(formBuilder, createpostservice) {
        this.formBuilder = formBuilder;
        this.createpostservice = createpostservice;
        this.query = '';
        this.showErrors = false;
        this.postIsReady = false;
        this.date = new Date();
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        var _a;
        this.updatePosts();
        this.createPost = this.formBuilder.group({
            tags: this.formBuilder.group((_a = {},
                _a[myPost_1.Tags.Hair] = false,
                _a[myPost_1.Tags.Fry] = false,
                _a[myPost_1.Tags.Soap] = false,
                _a[myPost_1.Tags.Recomend] = false,
                _a[myPost_1.Tags.Face] = false,
                _a)),
            title: ['', forms_1.Validators.minLength(5)],
            text: ['', forms_1.Validators.minLength(100)],
            date: this.date
        });
    };
    CreatePostComponent.prototype.getTags = function (tags) {
        var myTags = [];
        for (var key in tags) {
            if (tags[key]) {
                myTags.push(key);
            }
        }
        return myTags;
    };
    CreatePostComponent.prototype.save = function () {
        if (this.createPost.valid) {
            var formValue = this.createPost.getRawValue();
            // formValue.ingredients = this.getSelectedIngredients(formValue.ingredients);
            formValue.tags = this.getTags(formValue.tags);
            this.createpostservice.createPost(formValue)
                .then(function (success) { return console.info(success); })["catch"](function (failure) { return console.error(failure); });
            this.postIsReady = true;
            this.updatePosts();
        }
        else {
            this.showErrors = true;
            console.log('Nie można zapisać postu. Sprawdź komunikaty o błędach.');
        }
    };
    CreatePostComponent.prototype.updatePosts = function () {
        this.myPosts = this.createpostservice.fetchPosts(this.query);
    };
    CreatePostComponent = __decorate([
        core_1.Component({
            selector: 'app-create-post',
            templateUrl: './create-post.component.html',
            styleUrls: ['./create-post.component.css']
        })
    ], CreatePostComponent);
    return CreatePostComponent;
}());
exports.CreatePostComponent = CreatePostComponent;
