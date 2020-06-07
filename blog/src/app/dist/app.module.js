"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var create_post_component_1 = require("./create-post/create-post.component");
var navigation_component_1 = require("./navigation/navigation.component");
var oops_component_1 = require("./oops/oops.component");
var post_detail_component_1 = require("./post-detail/post-detail.component");
var posts_list_component_1 = require("./posts-list/posts-list.component");
var posts_component_1 = require("./posts/posts.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navigation_component_1.NavigationComponent,
                posts_component_1.PostsComponent,
                create_post_component_1.CreatePostComponent,
                oops_component_1.OopsComponent,
                posts_list_component_1.PostsListComponent,
                post_detail_component_1.PostDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(app_routes_1.appRoutes),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
