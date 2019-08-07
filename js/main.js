'use strict';

fetch("https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // console.log(data.palettes[0].colors);
        const dataColors = data.palettes[0].colors;
        const palette = document.querySelector('.palette');

        const colorDiv1 = document.createElement('div');
        const colorDiv2 = document.createElement('div');
        const colorDiv3 = document.createElement('div');
        const colorDiv4 = document.createElement('div');
        const colorDiv5 = document.createElement('div');

        palette.style.height = '80px';
        palette.style.width = '500px';
        // palette.style.border = 'solid black 1.5px';



        colorDiv1.style.background = `#${dataColors[0]}`;
        colorDiv1.style.height = '80px';
        colorDiv1.style.width = '80px';
        colorDiv1.style.border = 'solid black 1.5px';

        colorDiv2.style.background = `#${dataColors[1]}`;
        colorDiv2.style.height = '80px';
        colorDiv2.style.width = '80px';
        colorDiv2.style.border = 'solid black 1.5px';

        colorDiv3.style.background = `#${dataColors[2]}`;
        colorDiv3.style.height = '80px';
        colorDiv3.style.width = '80px';
        colorDiv3.style.border = 'solid black 1.5px';

        colorDiv4.style.background = `#${dataColors[3]}`;
        colorDiv4.style.height = '80px';
        colorDiv4.style.width = '80px';
        colorDiv4.style.border = 'solid black 1.5px';

        colorDiv5.style.background = `#${dataColors[4]}`;
        colorDiv5.style.height = '80px';
        colorDiv5.style.width = '80px';
        colorDiv5.style.border = 'solid black 1.5px';


        palette.appendChild(colorDiv1);
        palette.appendChild(colorDiv2);
        palette.appendChild(colorDiv3);
        palette.appendChild(colorDiv4);
        palette.appendChild(colorDiv5);




        console.log(dataColors[0]);
        //

        // colorDiv1.style = data.palettes[1];
        // colorDiv1.value = 'hola';

        // palette.appendChild(colorDiv1);
        // palette.appendChild(colorDiv2);
        // palette.appendChild(colorDiv3);
        // palette.appendChild(colorDiv4);
        // palette.appendChild(colorDiv5);

        // palette.className('paleta');
    })

// dentro de body. 1 hijo/paleta
// dentro de paleta 5 hijos/div
// 5 divs con esta estructura
// <div class="color__item" style="background-color:#ffcc00"></div>


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

//necesito hacer un bucle para poner listeners a todos los elementos. había puesto classname contains, cuando con toggle no es necesario.meter las funciones dentro del then para que coja la data
