"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostTitleComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var PostTitleComponent = /** @class */ (function () {
    // colltection = this.myPosts.title;
    function PostTitleComponent(createPostService, activatedRoute, router) {
        var _this = this;
        this.createPostService = createPostService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this["delete"] = new core_1.EventEmitter();
        this.config = {
            currentPage: 1,
            itemsPerPage: 5,
            totalItems: 0
        };
        activatedRoute.queryParams.subscribe(function (params) { return _this.config.currentPage = params.page ? params.page : 1; });
    }
    PostTitleComponent.prototype.pageChange = function (newPage) {
        this.router.navigate([''], { queryParams: { page: newPage } });
    };
    PostTitleComponent.prototype.ngOnInit = function () {
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
    ], PostTitleComponent.prototype, "myPost");
    __decorate([
        core_1.Output()
    ], PostTitleComponent.prototype, "delete");
    PostTitleComponent = __decorate([
        core_1.Component({
            selector: 'app-post-title',
            templateUrl: './post-title.component.html',
            styleUrls: ['./post-title.component.css'],
            animations: [
                animations_1.trigger('items', [
                    animations_1.transition(':enter', [
                        animations_1.style({ transform: 'scale(0.1)', opacity: 0 }),
                        animations_1.animate('1s cubic-bezier(.8, -0.6, 0.26, 1.6)', animations_1.style({ transform: 'scale(1)', opacity: 1 }))
                    ]),
                    animations_1.transition(':leave', [
                        animations_1.style({ transform: 'scale(1)', opacity: 1, height: '*' }),
                        animations_1.animate('0.6s cubic-bezier(.8, -0.6, 0.2, 1.5)', animations_1.style({
                            transform: 'scale(0.5)', opacity: 0,
                            height: '0px', margin: '0px'
                        }))
                    ])
                ]),
            ]
        })
    ], PostTitleComponent);
    return PostTitleComponent;
}());
exports.PostTitleComponent = PostTitleComponent;
