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
var confirm_component_1 = require("../confirm/confirm.component");
var PostItemComponent = /** @class */ (function () {
    function PostItemComponent(dialog) {
        this.dialog = dialog;
        this["delete"] = new core_1.EventEmitter();
        this.title = 'Usuwanie postu';
    }
    PostItemComponent.prototype.onClick = function () {
        this["delete"].emit(this.myPost.id);
    };
    PostItemComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(confirm_component_1.ConfirmComponent, {
            width: '350px',
            data: "Czy chcesz usun\u0105\u0107 ten post?"
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                console.log('Yes clicked');
                _this["delete"].emit(_this.myPost.id);
            }
        });
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
