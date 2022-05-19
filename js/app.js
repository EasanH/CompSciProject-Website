'use strict';
const switcher = document.querySelector('.btn');
var img = document.querySelector('.img1');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        img.src = "C:/Users/temp2/OneDrive/Documents/GitHub/CompSciProject-Website/images/moon.png";
    } else {
        img.src = "C:/Users/temp2/OneDrive/Documents/GitHub/CompSciProject-Website/images/sun.png";
    }
    console.log('current class name: ' + className);
    
});

