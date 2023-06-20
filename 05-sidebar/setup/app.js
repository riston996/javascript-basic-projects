// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.sidebar-toggle');
const links = document.querySelector('.sidebar');
const close = document.querySelector('.close-btn');

navToggle.addEventListener('click', function(){
   console.log(links.classList);

    links.classList.toggle('show-sidebar');
   
});

close.addEventListener('click', function(){
    console.log(links.classList);
 
     links.classList.toggle('show-sidebar');
    
 });