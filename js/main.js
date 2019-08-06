'use strict';

const data = [{
        title: 'Asteroids 101',
        image: 'https://via.placeholder.com/200x100'
    },
    {
        title: 'Life on Mars',
        image: 'https://via.placeholder.com/200x100'
    },
    {
        title: 'Martians invade Earth',
        image: 'https://via.placeholder.com/200x100'
    },
    {
        title: 'Humans aren\'t real',
        image: 'https://via.placeholder.com/200x100'
    },
    {
        title: 'Space The Final Frontier',
        image: 'https://via.placeholder.com/200x100'
    }
];


const listNews = document.querySelector('.news');

for (let i = 0; i < data.length; i++) {

    const newItemList = document.createElement('li');
    const newTitle = document.createElement('h2');
    const newContentTitle = document.createTextNode(data[i].title);
    const newImage = document.createElement('img');

    newItemList.className = '.new__item';
    newTitle.appendChild(newContentTitle);
    newTitle.className = '.news__title';

    newImage.src = data[i].image;
    newImage.alt = data[i].title;

    listNews.appendChild(newItemList);
    listNews.appendChild(newTitle);
    listNews.appendChild(newImage);

}