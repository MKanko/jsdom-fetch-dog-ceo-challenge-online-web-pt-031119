console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {
    const select = document.querySelector('select#breed-dropdown');
    select.addEventListener('change', filterBreeds)
    fetchImages();
    fetchBreeds();
})

const fetchImages = () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function(responce) {
        return responce.json();
    })
    .then(function(json) {
        renderImages(json);
    })
}

const renderImages = (json) => {
    const div = document.querySelector('div#dog-image-container');
     json["message"].forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.height = "150";
        img.width = "180";      
        img.hspace = "20";
        div.appendChild(img);        
    })
}

const fetchBreeds = () => {
   fetch('https://dog.ceo/api/breeds/list/all')
   .then(function(responce) {
       return responce.json();
   })
   .then(function(json) {
       renderBreeds(json);
   }) 
}

const renderBreeds = (json) => {
    const ul = document.querySelector('ul');
    const mess = json["message"];
    for (const [key] of Object.entries(mess)) {
        const li = document.createElement('li');
        li.innerText = key
        ul.appendChild(li);
        li.addEventListener('click', function() {
            this.style.color = 'green';
        })
    }  
}

const filterBreeds = () => { 
    const breedList = document.querySelector('ul#dog-breeds').children;
    for (i = 0; i < breedList.length; i++) {
        if (breedList[i].innerText.startsWith(event.target.value)) {
            breedList[i].style.display = 'list-item'
        } else { 
            breedList[i].style.display = 'none'
        } 
    }
}

// ECMAScript 2017
// ECMAScript 2017 would introduce a new function Object.entries. You can use this to iterate the object as you wanted.

// 'use strict';

// const object = {'a': 1, 'b': 2, 'c' : 3};
// for (const [key, value] of Object.entries(object)) {
//   console.log(key, value);
// }
// Output
// a 1
// b 2
// c 3

