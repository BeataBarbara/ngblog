"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var button_1 = require("@angular/material/button");
var dialog_1 = require("@angular/material/dialog");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var create_post_component_1 = require("../create-post/create-post.component");
var oops_component_1 = require("../oops/oops.component");
var post_detail_component_1 = require("../post-detail/post-detail.component");
var posts_list_component_1 = require("../posts-list/posts-list.component");
var posts_component_1 = require("../posts/posts.component");
var post_item_component_1 = require("../post-item/post-item.component");
var create_post_service_1 = require("../create-post.service");
var post_title_component_1 = require("../post-title/post-title.component");
var ngx_pipes_1 = require("ngx-pipes");
var animations_1 = require("@angular/platform-browser/animations");
var confirm_component_1 = require("../confirm/confirm.component");
var sort_1 = require("@angular/material/sort");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                posts_component_1.PostsComponent,
                create_post_component_1.CreatePostComponent,
                oops_component_1.OopsComponent,
                posts_list_component_1.PostsListComponent,
                post_detail_component_1.PostDetailComponent,
                post_item_component_1.PostItemComponent,
                post_title_component_1.PostTitleComponent,
                confirm_component_1.ConfirmComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(app_routes_1.appRoutes),
                forms_2.ReactiveFormsModule,
                ngx_pipes_1.NgPipesModule,
                animations_1.BrowserAnimationsModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule,
                sort_1.MatSortModule,
                platform_browser_1.BrowserModule,
                button_1.MatButtonModule,
            ],
            providers: [
                create_post_service_1.CreatePostService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
