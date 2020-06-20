"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostDetailComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var PostDetailComponent = /** @class */ (function () {
    function PostDetailComponent(createPostService, activatedRoute) {
        this.createPostService = createPostService;
        this.activatedRoute = activatedRoute;
        this["delete"] = new core_1.EventEmitter();
    }
    PostDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myPostId = this.activatedRoute.snapshot.params.id;
        this.createPostService.fetchPost(myPostId)
            .then(function (myPost) {
            console.log(myPost);
            _this.myPost = myPost;
        })["catch"](function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.Input()
    ], PostDetailComponent.prototype, "myPost");
    __decorate([
        core_1.Output()
    ], PostDetailComponent.prototype, "delete");
    PostDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-post-detail',
            templateUrl: './post-detail.component.html',
            styleUrls: ['./post-detail.component.css'],
            animations: [
                animations_1.trigger('items', [
                    animations_1.transition(':enter', [
                        animations_1.style({ transform: 'scale(0.1)', opacity: 0 }),
                        animations_1.animate('1s 0.1s ease-out', animations_1.style({ transform: 'scale(1)', opacity: 1 }))
                    ]),
                ]),
                animations_1.trigger('tag', [
                    animations_1.state('initial', animations_1.style({
                        backgroundColor: 'green',
                        transform: 'scale(1)'
                    })),
                    animations_1.state('final', animations_1.style({
                        backgroundColor: 'red',
                        transform: 'scale(1.5)'
                    })),
                    animations_1.transition('final=>initial', animations_1.animate('1000ms')),
                    animations_1.transition('initial=>final', animations_1.animate('1500ms'))
                ]),
            ]
        })
    ], PostDetailComponent);
    return PostDetailComponent;
}());
exports.PostDetailComponent = PostDetailComponent;
