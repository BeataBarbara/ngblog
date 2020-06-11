"use strict";
exports.__esModule = true;
exports.appRoutes = void 0;
var create_post_component_1 = require("../create-post/create-post.component");
var posts_list_component_1 = require("../posts-list/posts-list.component");
var post_detail_component_1 = require("../post-detail/post-detail.component");
var oops_component_1 = require("../oops/oops.component");
var posts_component_1 = require("../posts/posts.component");
exports.appRoutes = [
    { path: '', component: posts_component_1.PostsComponent },
    { path: 'create', component: create_post_component_1.CreatePostComponent },
    { path: 'list', component: posts_list_component_1.PostsListComponent },
    { path: 'list/:id', component: post_detail_component_1.PostDetailComponent },
    { path: '**', component: oops_component_1.OopsComponent }
];
