"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreatePostService = void 0;
var core_1 = require("@angular/core");
var CreatePostService = /** @class */ (function () {
    function CreatePostService(http) {
        this.http = http;
        // tslint:disable-next-line: no-inferrable-types
        this.url = 'http://localhost:3000/myposts';
    }
    CreatePostService.prototype.createPost = function (myPost) {
        // zapisywanie pojedyńczego postu
        return this.http.post(this.url, myPost).toPromise();
    };
    CreatePostService.prototype.fetchPosts = function (query) {
        // do searcha
        return this.http.get(this.url + "?q=" + query).toPromise();
    };
    CreatePostService.prototype.fetchPost = function (myPostId) {
        // pokazuje pojedyńczy post
        return this.http.get(this.url + "/" + myPostId).toPromise();
    };
    CreatePostService.prototype.deletePost = function (myPostId) {
        // usauwa pojedyńczy post
        return this.http["delete"](this.url + "/" + myPostId).toPromise();
    };
    CreatePostService = __decorate([
        core_1.Injectable()
    ], CreatePostService);
    return CreatePostService;
}());
exports.CreatePostService = CreatePostService;
