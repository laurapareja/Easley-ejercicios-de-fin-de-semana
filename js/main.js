'use strict';
fetch("https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const paletteList = [];

        for (let i = 0; i < 5; i++) {
            const palette = document.createElement('div');
            palette.style.height = '90px';
            palette.style.width = '410px';
            palette.className = `palette palette${i}`;

            const colorDiv1 = document.createElement('div');
            const colorDiv2 = document.createElement('div');
            const colorDiv3 = document.createElement('div');
            const colorDiv4 = document.createElement('div');
            const colorDiv5 = document.createElement('div');

            palette.appendChild(colorDiv1);
            palette.appendChild(colorDiv2);
            palette.appendChild(colorDiv3);
            palette.appendChild(colorDiv4);
            palette.appendChild(colorDiv5);

            paletteList.push(palette);

            const paletteListColor = [colorDiv1, colorDiv2, colorDiv3, colorDiv4, colorDiv5]


            for (let j = 0; j < paletteListColor.length; j++) {
                const colorPalette = paletteListColor[j];
                colorPalette.className = "color__item";
                colorPalette.style.height = '80px';
                colorPalette.style.width = '80px';
                colorPalette.style.border = 'solid black 1.5px';
                palette.appendChild(colorPalette);
                const dataColors = data.palettes[i].colors;
                colorPalette.style.background = `#${dataColors[j]}`;
            }

        }
        console.log(paletteList);
        const body = document.querySelector('.body');
        for (let i = 0; i < paletteList.length; i++) {
            body.appendChild(paletteList[i]);
        }
        const paletteElements = document.querySelectorAll('.palette');
        console.log(paletteElements);

        for (let paletteElement of paletteElements) {
            function choosePalette() {
                paletteElement.classList.toggle("favourite");
            }
            paletteElement.addEventListener("click", choosePalette);
        }
    })

// error en la funcion que escoge los colores, porque no tenia en cuenta la referencia del padre, el div paleta, que seria i. linea 39


// paleta de colores, generada en js con bucle
// fetch("https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palette.json")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         // console.log(data.palettes[0].colors);
//         const dataColors = data.palettes[0].colors;
//         const palette = document.querySelector('.palette');

//         const colorDiv1 = document.createElement('div');
//         const colorDiv2 = document.createElement('div');
//         const colorDiv3 = document.createElement('div');
//         const colorDiv4 = document.createElement('div');
//         const colorDiv5 = document.createElement('div');

//         const paletteList = [
//             colorDiv1,
//             colorDiv2,
//             colorDiv3,
//             colorDiv4,
//             colorDiv5
//         ]

//         palette.style.height = '80px';
//         palette.style.width = '500px';

//         for (let i = 0; i < paletteList.length; i++) {
//             const colorPalette = paletteList[i];

//             colorPalette.className = "color__item";
//             colorPalette.style.background = `#${dataColors[i]}`;
//             colorPalette.style.height = '80px';
//             colorPalette.style.width = '80px';
//             colorPalette.style.border = 'solid black 1.5px';

//             palette.appendChild(colorPalette);
//         }
//     })

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
//


// noticias favoritas
// fetch("https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/news.json")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         const listNews = document.querySelector('.news');
//         const news = data.news;

//         for (let i = 0; i < news.length; i++) {

//             const newItemList = document.createElement('li');
//             const newTitle = document.createElement('h2');
//             const newContentTitle = document.createTextNode(news[i].title);
//             const newImage = document.createElement('img');

//             newItemList.className = "new__item news__item--no-image-visible";
//             newTitle.appendChild(newContentTitle);
//             newTitle.className = 'news__title';
//             newImage.className = 'news__image';

//             // Exercise 2. Class mars of Mars/Martian titles
//             if (news[i].title.includes("Mars") || news[i].title.includes("Martian")) {
//                 newItemList.classList.add("news__item--from-mars");
//             }

//             newImage.src = news[i].image;
//             newImage.alt = news[i].title;

//             listNews.appendChild(newItemList);
//             newItemList.appendChild(newTitle);
//             newItemList.appendChild(newImage);
//         }
//         const newElements = document.querySelectorAll('li');

//         for (let listElement of newElements) {
//             function showNews() {
//                 listElement.classList.toggle("news__item--no-image-visible");
//             }
//             listElement.addEventListener("click", showNews);
//         }
//     })

// //necesito hacer un bucle para poner listeners a todos los elementos. había puesto classname contains, cuando con toggle no es necesario.meter las funciones dentro del then para que coja la data
