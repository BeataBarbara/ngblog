"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsComponent = void 0;
var core_1 = require("@angular/core");
// const axios = require('axios').default;
var posts = new Request('.../database.json');
var myList = document.querySelector('ul');
var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
        this.posts = [];
        this.posts2 = [
            { id: 1, title: 'title 1', content: 'Lorem  impsum' },
            { id: 2, title: 'title 2', content: 'Lorem impsum' },
            { id: 3, title: 'title 3', content: 'Lorem impsum' },
            { id: 4, title: 'title 4', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
            { id: 5, title: 'title 5', content: 'Lorem impsum' },
        ];
        fetch(posts)
            .then(function (resp) { return resp.json(); }) // Transform the data into json
            .then(function (data) {
            data.forEach(function (element) {
                console.log(element.title);
                document.getElementById('output').innerHTML += "<div> " + element.title + " </div>";
            });
        });
        // .then(data => {
        //   for (const title of data.title) {
        //     const listItem = document.createElement('li');
        //     listItem.appendChild(
        //       document.createElement('strong')
        //     ).textContent = title.Name;
        //     listItem.append(` can be found in ${title.Location}. Cost: `);
        //     listItem.appendChild(document.createElement('strong')).textContent = `£${title.id}`;
        //     myList.appendChild(listItem);
        //   }
        // })
        // .catch(console.error);
        // document.getElementById('output').innerHTML += `<div> ${title} </div>`;
        // }
        // // );
        // }
        // );
    }
    PostsComponent.prototype.ngOnInit = function () {
        throw new Error('Method not implemented.');
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        }),
        core_1.Injectable()
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
// export PostsComponent;
