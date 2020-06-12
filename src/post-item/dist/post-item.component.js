"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostItemComponent = void 0;
var core_1 = require("@angular/core");
var PostItemComponent = /** @class */ (function () {
    function PostItemComponent() {
        this["delete"] = new core_1.EventEmitter();
        // tslint:disable-next-line: member-ordering
        this.isHidden = true;
    }
    PostItemComponent.prototype.onClick = function () {
        this["delete"].emit(this.myPost.id);
    };
    __decorate([
        core_1.Input()
    ], PostItemComponent.prototype, "myPost");
    __decorate([
        core_1.Output()
    ], PostItemComponent.prototype, "delete");
    PostItemComponent = __decorate([
        core_1.Component({
            selector: 'app-post-item',
            templateUrl: './post-item.component.html',
            styleUrls: ['./post-item.component.css']
        })
    ], PostItemComponent);
    return PostItemComponent;
}());
exports.PostItemComponent = PostItemComponent;
