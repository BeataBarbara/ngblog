"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsListComponent = void 0;
var core_1 = require("@angular/core");
var PostsListComponent = /** @class */ (function () {
    function PostsListComponent(createPostService) {
        this.createPostService = createPostService;
        this.query = '';
        this.isHiddenBaseView = true;
        this.isHiddenSortDate = false;
        this.isHiddenSortTitle = false;
        this.isHiddenSortTextLen = false;
    }
    PostsListComponent.prototype.ngOnInit = function () {
        this.updatePosts();
    };
    PostsListComponent.prototype.sortDate = function () {
        this.isHiddenBaseView = false;
        this.isHiddenSortDate = true;
        this.isHiddenSortTitle = false;
        this.isHiddenSortTextLen = false;
    };
    PostsListComponent.prototype.sortName = function () {
        this.isHiddenBaseView = false;
        this.isHiddenSortDate = false;
        this.isHiddenSortTitle = true;
        this.isHiddenSortTextLen = false;
    };
    PostsListComponent.prototype.sortText = function () {
        this.isHiddenBaseView = false;
        this.isHiddenSortDate = false;
        this.isHiddenSortTitle = false;
        this.isHiddenSortTextLen = true;
    };
    PostsListComponent.prototype.onDelete = function (myPostId) {
        var _this = this;
        this.createPostService.deletePost(myPostId)
            .then(function () {
            _this.updatePosts();
        });
    };
    PostsListComponent.prototype.search = function (query) {
        this.query = query;
        this.myPosts = this.createPostService.fetchPosts(this.query);
    };
    PostsListComponent.prototype.updatePosts = function () {
        this.myPosts = this.createPostService.fetchPosts(this.query);
    };
    PostsListComponent = __decorate([
        core_1.Component({
            selector: 'app-posts-list',
            templateUrl: './posts-list.component.html',
            styleUrls: ['./posts-list.component.css']
        })
    ], PostsListComponent);
    return PostsListComponent;
}());
exports.PostsListComponent = PostsListComponent;
