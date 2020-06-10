"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsComponent = void 0;
var core_1 = require("@angular/core");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(createPostService) {
        this.createPostService = createPostService;
        // tslint:disable-next-line: no-inferrable-types
        this.query = '';
    }
    PostsComponent.prototype.ngOnInit = function () {
        console.log('myPosts');
        this.updatePosts();
    };
    PostsComponent.prototype.onDelete = function (myPostId) {
        var _this = this;
        this.createPostService.deletePost(myPostId)
            .then(function () {
            _this.updatePosts();
        });
    };
    PostsComponent.prototype.search = function (query) {
        this.query = query;
    };
    PostsComponent.prototype.updatePosts = function () {
        this.myPosts = this.createPostService.fetchPosts(this.query);
        console.log('myPostsxx');
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        })
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
