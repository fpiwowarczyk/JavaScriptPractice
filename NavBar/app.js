// Js SCRIPT :)

// classList - show/gets all classes
// contains - check classList for specific class
// add -add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
 
navToggle.addEventListener('click',function(){
// First version
   /* if(links.classList.contains('show-links')){
        links.classList.remove('show-links');
    } else {
        links.classList.add('show-links');
    }*/
    // Secound version
    links.classList.toggle("show-links");
});

