import { Component, OnInit, Injectable } from '@angular/core';
// const axios = require('axios').default;
const posts = new Request('.../database.json');
const myList = document.querySelector('ul');

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  constructor() {
    fetch(posts)
      .then((resp) => resp.json()) // Transform the data into json
      .then(data => {
        data.forEach(element => {
          console.log(element.title);
          document.getElementById('output').innerHTML += `<div> ${element.title} </div>`;
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
  posts = [];

  posts2 = [
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
    // tslint:disable-next-line: no-trailing-whitespace
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  //   constructor() {
  //     fetch('https://api.jsonbin.io/b/5ec2beca2bb52645e55330ba')
  // .then((resp) => resp.json())
  // .then(data => data.forEach(element => {
  // document.getElementById('output').innerHTML += `<div> ${element.name} </div>`;
  // }));
  //   }
}

