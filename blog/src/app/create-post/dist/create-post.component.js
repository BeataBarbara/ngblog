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
var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(formBuilder, createpostservice) {
        this.formBuilder = formBuilder;
        this.createpostservice = createpostservice;
        // tslint:disable-next-line: no-inferrable-types
        this.showErrors = false;
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        this.createPost = this.formBuilder.group({
            title: ['', forms_1.Validators.minLength(5)],
            text: ['', forms_1.Validators.minLength(100)]
        });
    };
    CreatePostComponent.prototype.save = function () {
        if (this.createPost.valid) {
            var formValue = this.createPost.getRawValue();
            // zapisujemy post do serwera
            this.createpostservice.createPost(formValue)
                // tslint:disable-next-line: no-console
                .then(function (success) { return console.info(success); })["catch"](function (failure) { return console.error(failure); });
        }
        else {
            this.showErrors = true;
            console.log('Nie można zapisać postu. Sprawdź komunikaty o błędach.');
        }
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
