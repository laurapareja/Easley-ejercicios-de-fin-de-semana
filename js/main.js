'use strict';

// const data = [{
//         title: 'Asteroids 101',
//         image: 'https://via.placeholder.com/200x100'
//     },
//     {
//         title: 'Life on Mars',
//         image: 'https://via.placeholder.com/200x100'
//     },
//     {
//         title: 'Martians invade Earth',
//         image: 'https://via.placeholder.com/200x100'
//     },
//     {
//         title: 'Humans aren\'t real',
//         image: 'https://via.placeholder.com/200x100'
//     },
//     {
//         title: 'Space The Final Frontier',
//         image: 'https://via.placeholder.com/200x100'
//     }
// ];

fetch("https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const listNews = document.querySelector('.news');
        const news = data.news;

        for (let i = 0; i < news.length; i++) {

            const newItemList = document.createElement('li');
            const newTitle = document.createElement('h2');
            const newContentTitle = document.createTextNode(news[i].title);
            const newImage = document.createElement('img');

            newItemList.className = "new__item news__item--no-image-visible";
            newTitle.appendChild(newContentTitle);
            newTitle.className = 'news__title';
            newImage.className = 'news__image';

            // Exercise 2. Class mars of Mars/Martian titles
            if (news[i].title.includes("Mars") || news[i].title.includes("Martian")) {
                newItemList.classList.add("news__item--from-mars");
            }

            newImage.src = news[i].image;
            newImage.alt = news[i].title;

            listNews.appendChild(newItemList);
            newItemList.appendChild(newTitle);
            newItemList.appendChild(newImage);
        }
        const newElements = document.querySelectorAll('li');

        for (let listElement of newElements) {
            function showNews() {
                listElement.classList.toggle("news__item--no-image-visible");
            }
            listElement.addEventListener("click", showNews);
        }
    })
